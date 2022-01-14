import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';

import { getFont } from '~assets';
import {
  COUNTRIES_SCREEN_NAME,
  CountriesScreen,
  COUNTRY_DETAILS_SCREEN_NAME,
  CountryDetailsScreen,
  MENU_SCREEN_NAME,
  MenuScreen,
  SELECT_REGION_SCREEN_NAME,
  SelectRegionScreen,
} from '~modules/countries';
import { sizes, useTheme } from '~theme';

import themedStyles from './styles';

const Stack = createStackNavigator();

const TOP_BAR_HEIGHT = Platform.select({ ios: 88, android: 56 });

const ApplicationStack: React.FC = () => {
  const { t } = useTranslation();
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
      {/* // COUNTRIES */}

      <Stack.Screen
        name={COUNTRIES_SCREEN_NAME}
        component={CountriesScreen}
        options={options => ({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          headerTitle: options.route.params.title,
          headerBackTestID: 'Back',
        })}
      />
      <Stack.Screen
        name={COUNTRY_DETAILS_SCREEN_NAME}
        component={CountryDetailsScreen}
        options={options => ({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          headerTitle: options.route.params.title,
          headerBackTestID: 'Back',
        })}
      />
      <Stack.Screen name={MENU_SCREEN_NAME} component={MenuScreen} options={{ headerTitle: t('menu') }} />
      <Stack.Screen
        name={SELECT_REGION_SCREEN_NAME}
        component={SelectRegionScreen}
        options={{
          headerTitle: t('regions'),
          headerBackTestID: 'Back',
        }}
      />
    </Stack.Navigator>
  );
};

export default ApplicationStack;
