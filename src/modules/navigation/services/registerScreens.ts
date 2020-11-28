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
import { colors } from '~theme';

import { Screen } from '../types';

const screens: Screen[] = [
  {
    id: MENU_SCREEN_NAME,
    component: MenuScreen,
    backgroundColor: colors.WHITE,
  },
  {
    id: COUNTRIES_SCREEN_NAME,
    component: CountriesScreen,
    backgroundColor: colors.WHITE,
  },
  {
    id: SELECT_REGION_SCREEN_NAME,
    component: SelectRegionScreen,
    backgroundColor: colors.WHITE,
  },
  {
    id: COUNTRY_DETAILS_SCREEN_NAME,
    component: CountryDetailsScreen,
    backgroundColor: colors.WHITE,
  },
];

export const registerScreens = (): void =>
  screens.forEach(({ id, component, backgroundColor }) =>
    Navigation.registerComponent(
      id,
      () => AppProvider(component, backgroundColor),
      () => component
    )
  );
