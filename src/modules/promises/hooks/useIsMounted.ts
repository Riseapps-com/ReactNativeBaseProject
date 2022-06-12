import { useEffect, useRef } from 'react';

import type { MutableRefObject } from 'react';

const useIsMounted = (): MutableRefObject<boolean> => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

export default useIsMounted;
