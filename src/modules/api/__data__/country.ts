import { Country } from '../types';

const country: Country = {
  name: 'Cook Islands',
  topLevelDomain: ['.ck'],
  alpha2Code: 'CK',
  alpha3Code: 'COK',
  callingCodes: ['682'],
  capital: 'Avarua',
  altSpellings: ['CK', "Kūki 'Āirani"],
  region: 'Oceania',
  subregion: 'Polynesia',
  population: 18100,
  latlng: [-21.23333333, -159.76666666],
  demonym: 'Cook Islander',
  area: 236.0,
  gini: 0,
  timezones: ['UTC-10:00'],
  borders: [],
  nativeName: 'Cook Islands',
  numericCode: '184',
  currencies: [
    { code: 'NZD', name: 'New Zealand dollar', symbol: '$' },
    {
      code: 'CKD',
      name: 'Cook Islands dollar',
      symbol: '$',
    },
  ],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  languages: [{ iso639_1: 'en', iso639_2: 'eng', name: 'English', nativeName: 'English' }],
  translations: {
    de: 'Cookinseln',
    es: 'Islas Cook',
    fr: 'Îles Cook',
    ja: 'クック諸島',
    it: 'Isole Cook',
    br: 'Ilhas Cook',
    pt: 'Ilhas Cook',
    nl: 'Cookeilanden',
    hr: 'Cookovo Otočje',
    fa: 'جزایر کوک',
  },
  flag: 'https://restcountries.eu/data/cok.svg',
  regionalBlocs: [],
  cioc: 'COK',
};

export { country };
