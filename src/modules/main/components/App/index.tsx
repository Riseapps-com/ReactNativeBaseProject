import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';

import { ErrorBoundary } from '~modules/errors';
import { NavigationContainer, RootStack } from '~modules/navigation';

import AppContainer from '../AppContainer';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <ErrorBoundary>
        <SafeAreaProvider>
          <AppContainer>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </AppContainer>
        </SafeAreaProvider>
      </ErrorBoundary>
    </RecoilRoot>
  );
};

export default App;
