import { useEffect } from 'react';

import { addEventListener } from '@react-native-community/netinfo';

import { netInfoAtom, useRecoilState } from '~modules/state';

const useNetInfo = (): void => {
  const [, setState] = useRecoilState(netInfoAtom);

  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      setState(prevState => ({ ...prevState, netInfo: state }));
    });

    return () => {
      unsubscribe();
    };
  }, [setState]);
};

export default useNetInfo;
