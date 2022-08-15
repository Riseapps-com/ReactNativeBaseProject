import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { getFont } from '~assets';
import { MENU_SCREEN_NAME } from '~modules/countries';
import { sizes, useTheme } from '~theme';

import { CountriesGroup } from '../CountriesGroup';

import themedStyles from './styles';

const Stack = createStackNavigator();

const TOP_BAR_HEIGHT = Platform.select({ ios: 88, android: 56 });

const ApplicationStack: React.FC = () => {
  const [, theme] = useTheme(themedStyles);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.primary, height: TOP_BAR_HEIGHT },
        headerTintColor: theme.separator,
        headerTitleStyle: {
          color: theme.secondaryText,
          fontSize: sizes.FONT_SIZE_M,
          fontFamily: getFont('bold'),
        },
        headerBackTitleStyle: {
          fontSize: sizes.FONT_SIZE_S,
          fontFamily: getFont('regular'),
        },
      }}
      initialRouteName={MENU_SCREEN_NAME}
    >
      {CountriesGroup(Stack)}
    </Stack.Navigator>
  );
};

export default ApplicationStack;
