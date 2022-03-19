import React from 'react';

import { Provider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';

import { ErrorBoundary } from '~modules/errors';
import { NavigationContainer, RootStack } from '~modules/navigation';
import { NetworkProvider } from '~modules/network';
import { paperTheme } from '~theme';

import AppContainer from '../AppContainer';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <Provider theme={paperTheme}>
          <ErrorBoundary>
            <NetworkProvider>
              <AppContainer>
                <NavigationContainer>
                  <RootStack />
                </NavigationContainer>
              </AppContainer>
            </NetworkProvider>
          </ErrorBoundary>
        </Provider>
      </SafeAreaProvider>
    </RecoilRoot>
  );
};

export default App;
