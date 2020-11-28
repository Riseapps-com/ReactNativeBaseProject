import { Navigation } from 'react-native-navigation';

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
import { AppProvider } from '~modules/main';

import { Screen } from '../types';

const screens: Screen[] = [
  {
    id: MENU_SCREEN_NAME,
    component: MenuScreen,
  },
  {
    id: COUNTRIES_SCREEN_NAME,
    component: CountriesScreen,
  },
  {
    id: SELECT_REGION_SCREEN_NAME,
    component: SelectRegionScreen,
  },
  {
    id: COUNTRY_DETAILS_SCREEN_NAME,
    component: CountryDetailsScreen,
  },
];

export const registerScreens = (): void =>
  screens.forEach(({ id, component }) =>
    Navigation.registerComponent(
      id,
      () => AppProvider(component),
      () => component
    )
  );
