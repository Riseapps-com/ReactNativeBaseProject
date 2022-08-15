import React from 'react';

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
import { I18n } from '~modules/localization';

import type { createStackNavigator } from '@react-navigation/stack';

export const CountriesGroup = (Stack: ReturnType<typeof createStackNavigator>): React.ReactNode => (
  <>
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
    <Stack.Screen name={MENU_SCREEN_NAME} component={MenuScreen} options={{ headerTitle: I18n.t('navigation.menu') }} />
    <Stack.Screen
      name={SELECT_REGION_SCREEN_NAME}
      component={SelectRegionScreen}
      options={{
        headerTitle: I18n.t('navigation.regions'),
        headerBackTestID: 'Back',
      }}
    />
  </>
);
