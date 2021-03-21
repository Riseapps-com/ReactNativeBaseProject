import { useCallback } from 'react';

import { RuntimeError } from '~modules/errors';
import { logger } from '~modules/logger';

import { promiseUtilities } from '../services';

const useAsync = () => {
  const doAsync = useCallback(
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

        if (error instanceof RuntimeError) {
          logger.logError('GLOBAL', error);
        }

        throw error;
      }
    },
    []
  );

  return doAsync;
};

export default useAsync;
