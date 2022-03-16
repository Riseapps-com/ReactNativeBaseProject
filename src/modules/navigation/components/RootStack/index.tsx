import React, { useEffect } from 'react';

import RNBootSplash from 'react-native-bootsplash';

import ApplicationStack from '../ApplicationStack';

const RootStack: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return <ApplicationStack />;
};

export default RootStack;
