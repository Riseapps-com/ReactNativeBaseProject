import { LocalRegion } from '~modules/state';

export type CountriesScreenProps = {
  region?: LocalRegion;
};
export type CountryDetailsScreenProps = {
  code: string;
  title: string;
};

export type FlagHeight = 'h20' | 'h24' | 'h40' | 'h60' | 'h80' | 'h120' | 'h240';
