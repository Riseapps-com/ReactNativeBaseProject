import React from 'react';
import { NavigationProvider } from 'react-native-navigation-hooks';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ErrorBoundary } from '~modules/errors';
import { rootStore, StoreContext } from '~modules/state';
import { ThemeProvider } from '~theme';

export type AppProviderProps = {
  componentId: string;
};

const AppProvider = <P extends AppProviderProps>(
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Component: React.ComponentType<P>
) => (props: AppProviderProps) => {
  return (
    <StoreContext.Provider value={rootStore}>
      <SafeAreaProvider>
        <ErrorBoundary>
          <NavigationProvider value={{ componentId: props.componentId }}>
            <ThemeProvider>
              <Component {...(props as P)} />
            </ThemeProvider>
          </NavigationProvider>
        </ErrorBoundary>
      </SafeAreaProvider>
    </StoreContext.Provider>
  );
};

export default AppProvider;
