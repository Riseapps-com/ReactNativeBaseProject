import type {
  COUNTRIES_SCREEN_NAME,
  COUNTRY_DETAILS_SCREEN_NAME,
  MENU_SCREEN_NAME,
  SELECT_REGION_SCREEN_NAME,
} from '~modules/countries';
import type { CountriesParams, CountryDetailsParams, MenuParams, SelectRegionParams } from '~modules/countries/types';

export type ApplicationParams = {
  // COUNTRIES
  [COUNTRIES_SCREEN_NAME]: CountriesParams;
  [COUNTRY_DETAILS_SCREEN_NAME]: CountryDetailsParams;
  [MENU_SCREEN_NAME]: MenuParams;
  [SELECT_REGION_SCREEN_NAME]: SelectRegionParams;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line max-len
    // eslint-disable-next-line @typescript-eslint/no-empty-interface,@typescript-eslint/consistent-type-definitions
    interface RootParamList extends ApplicationParams {}
  }
}
