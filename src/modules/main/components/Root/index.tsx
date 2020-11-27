import React from 'react';

import { StoreContext, stores } from '~modules/state';

const Root: React.FC = () => {
  return <StoreContext.Provider value={stores.rootStore} />;
};

export default Root;
