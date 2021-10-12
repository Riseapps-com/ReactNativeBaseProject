import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useRef, useState } from 'react';

import useAsync from './useAsync';

const useRetriever = <T>(
  retrieveFn: () => Promise<T>,
  retrieveFnDeps: any[],
  defaultValue?: T,
  runOnFocus = false
): [T, boolean, () => Promise<void>] => {
  const isMounted = useRef<boolean>();

  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<T>(defaultValue as T);

  const doAsync = useAsync();
  // eslint-disable-next-line
  const retrieveFnCallback = useCallback(retrieveFn, retrieveFnDeps);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const retrieve = useCallback(async () => {
    const setIsLoadingCallback = (isLoadingInner: boolean) => {
      if (isMounted.current) setIsLoading(isLoadingInner);
    };

    const setResultCallback = (resultInner: T) => {
      if (isMounted.current) setResult(resultInner);
    };

    await doAsync<T>(retrieveFnCallback, setIsLoadingCallback, setResultCallback);
  }, [retrieveFnCallback, doAsync]);

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

  return [result, isLoading, retrieve];
};

export default useRetriever;
