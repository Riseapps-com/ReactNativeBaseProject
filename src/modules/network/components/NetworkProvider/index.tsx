import React from 'react';

import { useNetInfo, useNetworkMessage } from '../../hooks';

const NetworkProvider: React.FC = props => {
  useNetInfo();
  useNetworkMessage();

  return <>{props.children}</>;
};

export default NetworkProvider;
