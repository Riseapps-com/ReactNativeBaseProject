import { useCallback, useEffect, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';

import useAsync from './useAsync';
import useBlurEvent from './useBlurEvent';
import useIsMounted from './useIsMounted';

import type { ItemRetrieverFunction, UseItemRetrieverOptions, UseItemRetrieverReturn } from '../types';
import type { UseAsyncOptions } from './useAsync';
import type { AppError } from '~modules/errors';

const useItemRetriever = <T>(
  retrieveFn: ItemRetrieverFunction<T>,
  options: UseItemRetrieverOptions<T> = {}
): UseItemRetrieverReturn<T> => {
  const { defaultValue } = options;
  const runOnFocus = !!options.runOnFocus;
  const [result, setResult] = useState<OptionalNullable<T>>(defaultValue);
  const [error, setError] = useState<OptionalNullable<AppError>>();
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useIsMounted();
  const doAsync = useAsync();

  const retrieve = useCallback(() => {
    const setResultCallback = (innerResult: Nullable<T>): void => {
      if (!isMounted.current) return;

      setResult(innerResult);
    };

    const setErrorCallback = (innerError: Nullable<AppError>): void => {
      if (!isMounted.current) return;

      setError(innerError);
    };

    const setIsLoadingCallback = (innerSsLoading: boolean): void => {
      if (!isMounted.current) return;

      setIsLoading(innerSsLoading);
    };

    const doAsyncOptions: UseAsyncOptions<T> = {
      setResult: setResultCallback,
      setError: setErrorCallback,
      setIsLoading: setIsLoadingCallback,
    };

    doAsync(retrieveFn, doAsyncOptions);
  }, [doAsync, isMounted, retrieveFn]);

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

  useBlurEvent(() => {
    // We need to reset all the memoized values just after the screen is blurred in order to prevent screen flickering.
    setResult(defaultValue);
    setError(undefined);
    setIsLoading(true);
  }, runOnFocus);

  return [result, isLoading, error, retrieve];
};

export default useItemRetriever;
