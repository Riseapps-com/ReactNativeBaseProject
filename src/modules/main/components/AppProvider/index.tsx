import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { NavigationProvider } from 'react-native-navigation-hooks';

import { ErrorBoundary } from '~modules/errors';
import { rootStore, StoreContext } from '~modules/state';
import { ThemeProvider } from '~theme';

import styles from './styles';

export type AppProviderProps = {
  componentId: string;
};

const AppProvider = <P extends AppProviderProps>(
  Component: React.ComponentType<P>,
  withSafeArea: boolean
) => (props: AppProviderProps) => {
  const Container = withSafeArea ? SafeAreaView : View;

  return (
    <StoreContext.Provider value={rootStore}>
      <ErrorBoundary>
        <NavigationProvider value={{ componentId: props.componentId }}>
          <ThemeProvider>
            <Container style={styles.container}>
              <Component {...(props as P)} />
            </Container>
          </ThemeProvider>
        </NavigationProvider>
      </ErrorBoundary>
    </StoreContext.Provider>
  );
};

export default AppProvider;
