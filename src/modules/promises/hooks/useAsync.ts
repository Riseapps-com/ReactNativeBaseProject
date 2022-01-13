import { useCallback } from 'react';

import { HttpRequestError, RuntimeError } from '~modules/errors';
import { logger } from '~modules/logger';
import { useStatusMessage } from '~modules/statusMessages';

import { promiseUtilities } from '../services';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useAsync = () => {
  const displayStatusMessage = useStatusMessage();

  return useCallback(
    async <T>(
      toCall: () => Promise<T>,
      setIsLoadingCallback?: (isLoading: boolean) => void,
      setResultCallback?: (result: T) => void
    ) => {
      try {
        if (setIsLoadingCallback) {
          setIsLoadingCallback(true);
        }

        const result = await promiseUtilities.retry<T>(toCall);

        if (setResultCallback) {
          setResultCallback(result);
        }

        if (setIsLoadingCallback) {
          setIsLoadingCallback(false);
        }
      } catch (error) {
        if (setIsLoadingCallback) {
          setIsLoadingCallback(false);
        }

        if (error instanceof HttpRequestError) {
          return displayStatusMessage(error.message, 'error', 2750);
        }

        if (error instanceof RuntimeError) {
          logger.logError('GLOBAL', error);
        }

        throw error;
      }
    },
    [displayStatusMessage]
  );
};

export default useAsync;
