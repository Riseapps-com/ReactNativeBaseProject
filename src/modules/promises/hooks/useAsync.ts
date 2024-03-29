import { useCallback } from 'react';

import { HttpRequestError, RuntimeError, ValidationError } from '~modules/errors';
import { useStatusMessage } from '~modules/statusMessages';

import { promiseUtilities } from '../services';
import useIsMounted from './useIsMounted';

import type { AppError } from '~modules/errors';

export type UseAsyncOptions<T> = {
  setResult?: (result: T | null) => void;
  setError?: (error: AppError) => void;
  setIsLoading?: (isLoading: boolean) => void;
  onSuccess?: () => void;
};

// Otherwise we won't be able to use doAsync method multiple times.
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useAsync = () => {
  const displayStatusMessage = useStatusMessage();
  const isMounted = useIsMounted();

  return useCallback(
    async <T>(toCall: () => Promise<T | null>, options: UseAsyncOptions<T> = {}) => {
      const { setResult, setError, setIsLoading, onSuccess } = options;

      try {
        setIsLoading?.(true);

        const result = await promiseUtilities.retry<T | null>(toCall);

        if (!isMounted.current) return;

        setResult?.(result);
        setIsLoading?.(false);
        onSuccess?.();
      } catch (error) {
        // If error is an instance of RuntimeError or HttpRequestError, we know it's coming from some other part of our
        // application and should contain all necessary information.
        // If the error is anything else, we just parse it into unknown RuntimeError.
        const isErrorAlreadyParsed = error instanceof RuntimeError || error instanceof HttpRequestError;
        const parsedError = isErrorAlreadyParsed ? error : RuntimeError.fromOriginal(error, 'UnknownException');

        setIsLoading?.(false);

        // ValidationErrors have to be re-thrown so they can be caught in the form component and the validation error
        // message can be displayed next to the input that caused it.
        if (error instanceof ValidationError) {
          throw error;
        } else {
          setError?.(parsedError);
          displayStatusMessage(parsedError.message, 'error', 2750);
        }
      }
    },
    [displayStatusMessage, isMounted]
  );
};

export default useAsync;
