import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';

import { USE_STORYBOOK } from '~modules/storybook';

import ApplicationStack from '../ApplicationStack';
import StorybookStack from '../StorybookStack';

const RootStack: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  if (USE_STORYBOOK) {
    return <StorybookStack />;
  }

  return <ApplicationStack />;
};

export default RootStack;
