import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ApplicationParams } from '~modules/navigation';
import { LocalRegion } from '~modules/state';

// NAVIGATION PARAMS

export type CountriesParams = { region?: LocalRegion; title: string };
export type CountryDetailsParams = { code: string; title: string };
export type MenuParams = undefined;
export type SelectRegionParams = undefined;

// SCREEN NAVIGATION & ROUTES

export type CountriesNavigation = StackNavigationProp<ApplicationParams, 'COUNTRIES_SCREEN'>;
export type CountriesRoute = RouteProp<ApplicationParams, 'COUNTRIES_SCREEN'>;
export type CountryDetailsNavigation = StackNavigationProp<
  ApplicationParams,
  'COUNTRY_DETAILS_SCREEN'
>;
export type CountryDetailsRoute = RouteProp<ApplicationParams, 'COUNTRY_DETAILS_SCREEN'>;
export type MenuNavigation = StackNavigationProp<ApplicationParams, 'MENU_SCREEN'>;
export type MenuRoute = RouteProp<ApplicationParams, 'MENU_SCREEN'>;
export type SelectRegionNavigation = StackNavigationProp<ApplicationParams, 'SELECT_REGION_SCREEN'>;
export type SelectRegionRoute = RouteProp<ApplicationParams, 'SELECT_REGION_SCREEN'>;

// TYPES

export type FlagHeight = 'h20' | 'h24' | 'h40' | 'h60' | 'h80' | 'h120' | 'h240';
