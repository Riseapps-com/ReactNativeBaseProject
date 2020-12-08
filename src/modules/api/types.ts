export type Currency = {
  code: string;
  name: string;
  symbol: string;
};

export type Language = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  iso639_1: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  iso639_2: string;
  name: string;
  nativeName: string;
};

export type Translations = {
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
};

export type RegionalBloc = {
  acronym: string;
  name: string;
  otherAcronyms: string[];
  otherNames: string[];
};

export type Country = {
  id: string;
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: Currency[];
  languages: Language[];
  translations: Translations;
  flag: string;
  regionalBlocs: RegionalBloc[];
  cioc: string;
};

export type Region = 'africa' | 'americas' | 'asia' | 'europe' | 'oceania';
