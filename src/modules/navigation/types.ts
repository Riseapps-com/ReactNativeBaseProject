import {
  COUNTRIES_SCREEN_NAME,
  CountriesParams,
  COUNTRY_DETAILS_SCREEN_NAME,
  CountryDetailsParams,
  MENU_SCREEN_NAME,
  MenuParams,
  SELECT_REGION_SCREEN_NAME,
  SelectRegionParams,
} from '~modules/countries';

export type ApplicationParams = {
  // COUNTRIES
  [COUNTRIES_SCREEN_NAME]: CountriesParams;
  [COUNTRY_DETAILS_SCREEN_NAME]: CountryDetailsParams;
  [MENU_SCREEN_NAME]: MenuParams;
  [SELECT_REGION_SCREEN_NAME]: SelectRegionParams;
};
