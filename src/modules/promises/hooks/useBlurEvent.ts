import { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

const useBlurEvent = (callback: () => void, runOnFocus?: boolean): void => {
  const navigation = useNavigation();

  useEffect(() => {
    if (!runOnFocus) return;

    return navigation.addListener('blur', callback);
  }, [callback, navigation, runOnFocus]);
};

export default useBlurEvent;
