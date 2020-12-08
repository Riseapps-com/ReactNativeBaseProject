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

export type LocalRegion = 'africa' | 'americas' | 'asia' | 'europe' | 'oceania';
