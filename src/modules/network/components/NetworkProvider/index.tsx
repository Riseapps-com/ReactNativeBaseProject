import React from 'react';

import { useNetInfo, useNetworkMessage } from '../../hooks';

const NetworkProvider: React.FC = props => {
  useNetInfo();
  useNetworkMessage();

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{props.children}</>;
};

export default NetworkProvider;
