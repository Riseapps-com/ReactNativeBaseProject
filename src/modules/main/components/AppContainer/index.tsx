import React from 'react';
import { StatusBar } from 'react-native';

import { Portal } from 'react-native-paper';

import { StatusMessage } from '~modules/statusMessages';

export type AppContainerProps = {
  children: React.ReactNode;
};

const AppContainer: React.FC<AppContainerProps> = props => {
  return (
    <Portal.Host>
      <StatusBar barStyle="light-content" />
      {props.children}
      <StatusMessage />
    </Portal.Host>
  );
};

export default React.memo(AppContainer);
