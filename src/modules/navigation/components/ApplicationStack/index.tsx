import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useTranslation } from 'react-i18next';

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

const TOP_BAR_HEIGHT = 88;

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
          fontSize: sizes.BASE_FONT_SIZE,
          fontFamily: getFont('quicksand-bold'),
        },
        headerBackTitleStyle: {
          fontSize: sizes.SMALLER_FONT_SIZE,
          fontFamily: getFont('quicksand-regular'),
        },
      }}
      initialRouteName={MENU_SCREEN_NAME}
    >
      {/* // COUNTRIES */}

      <Stack.Screen
        name={COUNTRIES_SCREEN_NAME}
        component={CountriesScreen}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        options={options => ({ headerTitle: options.route.params.title })}
      />
      <Stack.Screen
        name={COUNTRY_DETAILS_SCREEN_NAME}
        component={CountryDetailsScreen}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        options={options => ({ headerTitle: options.route.params.title })}
      />
      <Stack.Screen
        name={MENU_SCREEN_NAME}
        component={MenuScreen}
        options={{ headerTitle: t('menu') }}
      />
      <Stack.Screen
        name={SELECT_REGION_SCREEN_NAME}
        component={SelectRegionScreen}
        options={{ headerTitle: t('regions') }}
      />
    </Stack.Navigator>
  );
};

export default ApplicationStack;
