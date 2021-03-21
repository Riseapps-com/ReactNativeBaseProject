import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ErrorBoundary } from '~modules/errors';
import { NavigationContainer, RootStack } from '~modules/navigation';
import { rootStore, StoreContext } from '~modules/state';

const App: React.FC = () => {
  return (
    <StoreContext.Provider value={rootStore}>
      <ErrorBoundary>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </ErrorBoundary>
    </StoreContext.Provider>
  );
};

export default App;
