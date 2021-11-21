import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ApplicationParams } from '~modules/navigation';

export type LocalRegion = 'africa' | 'americas' | 'asia' | 'europe' | 'oceania';

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
export type LocalCountry = {
  cca2: string;
  name: string;
  capital?: string;
  region: string;
  subregion: string;
  population: string;
  flagLink: string;
  currencies?: string;
  languages?: string;
};
