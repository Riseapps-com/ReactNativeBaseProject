import { useCallback, useEffect, useRef } from 'react';

const useTimeout = (): [(callback: () => any, timeout: number) => void, () => void] => {
  const timeoutIdRef = useRef<NodeJS.Timeout>();

  const callWithTimeout = useCallback((callback: () => void, timeout: number) => {
    timeoutIdRef.current = setTimeout(callback, timeout);
  }, []);

  const cancel = useCallback(() => {
    if (!timeoutIdRef.current) return;

    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = undefined;
  }, [timeoutIdRef]);

  useEffect(() => {
    return cancel;
  }, [cancel]);

  return [callWithTimeout, cancel];
};

export default useTimeout;
