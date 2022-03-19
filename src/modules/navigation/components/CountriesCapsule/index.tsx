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

export const CountriesCapsule = (Navigator: any): React.ReactFragment => (
  <>
    <Navigator.Screen
      name={COUNTRIES_SCREEN_NAME}
      component={CountriesScreen}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      options={options => ({
        headerTitle: options.route.params.title,
        headerBackTestID: 'Back',
      })}
    />
    <Navigator.Screen
      name={COUNTRY_DETAILS_SCREEN_NAME}
      component={CountryDetailsScreen}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      options={options => ({
        headerTitle: options.route.params.title,
        headerBackTestID: 'Back',
      })}
    />
    <Navigator.Screen
      name={MENU_SCREEN_NAME}
      component={MenuScreen}
      options={{ headerTitle: I18n.t('navigation.menu') }}
    />
    <Navigator.Screen
      name={SELECT_REGION_SCREEN_NAME}
      component={SelectRegionScreen}
      options={{
        headerTitle: I18n.t('navigation.regions'),
        headerBackTestID: 'Back',
      }}
    />
  </>
);
