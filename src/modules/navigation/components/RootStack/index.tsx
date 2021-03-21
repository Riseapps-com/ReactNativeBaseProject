import React from 'react';

import { USE_STORYBOOK } from '~modules/storybook';

import ApplicationStack from '../ApplicationStack';
import StorybookStack from '../StorybookStack';

const RootStack: React.FC = () => {
  if (USE_STORYBOOK) {
    return <StorybookStack />;
  }

  return <ApplicationStack />;
};

export default RootStack;
