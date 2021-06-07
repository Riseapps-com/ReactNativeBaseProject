import '~modules/storybook/services';

// import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
// import { getStorybookUI } from '@storybook/react-native';
import React from 'react';

import { STORYBOOK_SCREEN_NAME } from '~modules/storybook';

const Stack = createStackNavigator();

const StorybookStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={STORYBOOK_SCREEN_NAME}
    >
      {/* // STORYBOOK */}

      {/* <Stack.Screen */}
      {/*  name={STORYBOOK_SCREEN_NAME} */}
      {/*  component={getStorybookUI({ asyncStorage: AsyncStorage })} */}
      {/* /> */}
    </Stack.Navigator>
  );
};

export default StorybookStack;
