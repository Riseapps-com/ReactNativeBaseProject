import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';

import useAsync from './useAsync';

const useRetriever = <T>(
  retrieveFn: () => Promise<T>,
  retrieveFnDeps: any[],
  defaultValue?: T,
  runOnFocus = false
): [T, boolean] => {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<T>(defaultValue);
  const doAsync = useAsync();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callbackFn = useCallback(retrieveFn, retrieveFnDeps);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (runOnFocus) return;

    let isCancelled = false;

    const setIsLoadingCallback = (isLoadingInner: boolean) => {
      if (!isCancelled) setIsLoading(isLoadingInner);
    };

    const setResultCallback = (resultInner: T) => {
      if (!isCancelled) setResult(resultInner);
    };

    const retrieve = async () => {
      await doAsync<T>(callbackFn, setIsLoadingCallback, setResultCallback);
    };

    retrieve();

    return () => {
      isCancelled = true;
    };
  }, [callbackFn, doAsync, runOnFocus]);

  useFocusEffect(
    useCallback(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (!runOnFocus) return;

      let isCancelled = false;

      const setIsLoadingCallback = (isLoadingInner: boolean) => {
        if (!isCancelled) setIsLoading(isLoadingInner);
      };

      const setResultCallback = (resultInner: T) => {
        if (!isCancelled) setResult(resultInner);
      };

      const retrieve = async () => {
        await doAsync<T>(callbackFn, setIsLoadingCallback, setResultCallback);
      };

      retrieve();

      return () => {
        isCancelled = true;
      };
    }, [callbackFn, doAsync, runOnFocus])
  );

  return [result, isLoading];
};

export default useRetriever;
