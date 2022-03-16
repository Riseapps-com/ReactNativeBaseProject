import { useCallback, useEffect, useRef, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';

import useAsync from './useAsync';

import type { UseAsyncOptions } from './useAsync';
import type { AppError } from '~modules/errors';

type UseRetrieverReturn<T> = [
  OptionalNullable<T>,
  OptionalNullable<boolean>,
  OptionalNullable<AppError>,
  () => Promise<void>
];

const useRetriever = <T>(retrieveFn: () => Promise<T>, defaultValue?: T, runOnFocus = false): UseRetrieverReturn<T> => {
  const isMounted = useRef<boolean>();
  const [result, setResult] = useState<OptionalNullable<T>>(defaultValue as T);
  const [error, setError] = useState<OptionalNullable<AppError>>();
  const [isLoading, setIsLoading] = useState(true);

  const doAsync = useAsync();

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const retrieve = useCallback(async () => {
    const setResultCallback = (innerResult: Nullable<T>): void => {
      if (isMounted.current) setResult(innerResult);
    };

    const setErrorCallback = (innerError: Nullable<AppError>): void => {
      if (isMounted.current && innerError) setError(innerError);
    };

    const setIsLoadingCallback = (innerIsLoading: boolean): void => {
      if (isMounted.current) setIsLoading(innerIsLoading);
    };

    const doAsyncOptions: UseAsyncOptions<T> = {
      setResult: setResultCallback,
      setError: setErrorCallback,
      setIsLoading: setIsLoadingCallback,
    };

    await doAsync<T>(retrieveFn, doAsyncOptions);
  }, [doAsync, retrieveFn]);

  useEffect(() => {
    if (runOnFocus) return;

    retrieve();
  }, [retrieve, runOnFocus]);

  useFocusEffect(
    useCallback(() => {
      if (!runOnFocus) return;

      retrieve();
    }, [retrieve, runOnFocus])
  );

  return [result, isLoading, error, retrieve];
};

export default useRetriever;
