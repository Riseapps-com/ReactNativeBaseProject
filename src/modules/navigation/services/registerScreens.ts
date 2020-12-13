import { getStorybookUI } from '@storybook/react-native';
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
import { STORYBOOK_SCREEN_NAME } from '~modules/storybook';

import { Screen } from '../types';

const screens: Screen[] = [
  {
    id: STORYBOOK_SCREEN_NAME,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    component: getStorybookUI({}),
    withSafeArea: true,
  },
  {
    id: MENU_SCREEN_NAME,
    component: MenuScreen,
    withSafeArea: true,
  },
  {
    id: COUNTRIES_SCREEN_NAME,
    component: CountriesScreen,
    withSafeArea: true,
  },
  {
    id: SELECT_REGION_SCREEN_NAME,
    component: SelectRegionScreen,
    withSafeArea: true,
  },
  {
    id: COUNTRY_DETAILS_SCREEN_NAME,
    component: CountryDetailsScreen,
    withSafeArea: true,
  },
];

export const registerScreens = (): void =>
  screens.forEach(({ id, component, withSafeArea }) =>
    Navigation.registerComponent(
      id,
      () => AppProvider(component, withSafeArea),
      () => component
    )
  );
