export type NativeNameItem = {
  common: string;
  official: string;
};

export type NativeName = {
  [key: string]: NativeNameItem;
};

export type Name = NativeNameItem & {
  nativeName: NativeName;
};

export type Currency = {
  name: string;
  symbol: string;
};

export type Currencies = {
  [key: string]: Currency;
};

export type Idd = {
  root: string;
  suffixes: string[];
};

export type Languages = {
  [key: string]: string;
};

export type Translation = {
  official: string;
  common: string;
};

export type Translations = {
  [key: string]: Translation;
};

export type Demonym = {
  f: string;
  m: string;
};

export type Demonyms = {
  [key: string]: Demonym;
};

export type Maps = {
  googleMaps: string;
  openStreetMaps: string;
};

export type Gini = {
  [key: string]: number;
};

export type Flags = {
  svg: string;
  png: string;
};

export type Country = {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages?: Languages;
  translations?: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  flags: Flags;
};

export type Region = 'africa' | 'americas' | 'asia' | 'europe' | 'oceania';
