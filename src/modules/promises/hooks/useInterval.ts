import { useCallback, useEffect, useRef } from 'react';

const useInterval = (): [(callback: () => any, interval: number) => void, () => void] => {
  const intervalIdRef = useRef<NodeJS.Timeout>();

  const callWithInterval = useCallback((callback: () => void, interval: number) => {
    intervalIdRef.current = setInterval(callback, interval);
  }, []);

  const cancel = useCallback(() => {
    if (!intervalIdRef.current) return;

    clearInterval(intervalIdRef.current);
    intervalIdRef.current = undefined;
  }, [intervalIdRef]);

  useEffect(() => {
    return cancel;
  }, [cancel]);

  return [callWithInterval, cancel];
};

export default useInterval;
