import React from 'react';
import { Provider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';

import { ErrorBoundary } from '~modules/errors';
import { NavigationContainer, RootStack } from '~modules/navigation';
import { paperTheme } from '~theme';

import AppContainer from '../AppContainer';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <Provider theme={paperTheme}>
          <ErrorBoundary>
            <AppContainer>
              <NavigationContainer>
                <RootStack />
              </NavigationContainer>
            </AppContainer>
          </ErrorBoundary>
        </Provider>
      </SafeAreaProvider>
    </RecoilRoot>
  );
};

export default App;
