export type LocalRegion = 'africa' | 'americas' | 'asia' | 'europe' | 'oceania';

export type CountriesScreenProps = {
  region?: LocalRegion;
};
export type CountryDetailsScreenProps = {
  code: string;
  title: string;
};

export type LocalCountry = {
  id: string;
  name: string;
  capital: string;
  region: string;
  subregion: string;
  timezones: string[];
  currencies: string[];
  alpha2Code: string;
};

export type FlagHeight = 'h20' | 'h24' | 'h40' | 'h60' | 'h80' | 'h120' | 'h240';
