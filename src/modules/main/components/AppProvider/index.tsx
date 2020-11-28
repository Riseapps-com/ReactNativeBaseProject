import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StoreContext, stores } from '~modules/state';

// eslint-disable-next-line @typescript-eslint/ban-types
export type AppProviderProps = {};

const AppProvider = <P extends AppProviderProps>(
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Component: React.ComponentType<P>
) => (props: AppProviderProps) => {
  return (
    <StoreContext.Provider value={stores.rootStore}>
      <SafeAreaProvider>
        <Component {...(props as P)} />
      </SafeAreaProvider>
    </StoreContext.Provider>
  );
};

export default AppProvider;
