import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StoreContext, stores } from '~modules/state';

// eslint-disable-next-line @typescript-eslint/ban-types
export type AppProviderProps = {};

const AppProvider = <P extends AppProviderProps>(
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Component: React.ComponentType<P>,
  backgroundColor: string
) => (props: AppProviderProps) => {
  return (
    <StoreContext.Provider value={stores.rootStore}>
      <SafeAreaProvider>
        <View style={{ backgroundColor }}>
          <Component {...(props as P)} />
        </View>
      </SafeAreaProvider>
    </StoreContext.Provider>
  );
};

export default AppProvider;
