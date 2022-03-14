import { Country } from '../types';

export const country: Country = {
  name: {
    common: 'Ukraine',
    official: 'Ukraine',
    nativeName: { ukr: { official: 'Україна', common: 'Україна' } },
  },
  tld: ['.ua', '.укр'],
  cca2: 'UA',
  ccn3: '804',
  cca3: 'UKR',
  cioc: 'UKR',
  independent: true,
  status: 'officially-assigned',
  unMember: true,
  currencies: { UAH: { name: 'Ukrainian hryvnia', symbol: '₴' } },
  idd: { root: '+3', suffixes: ['80'] },
  capital: ['Kyiv'],
  altSpellings: ['UA', 'Ukrayina'],
  region: 'Europe',
  subregion: 'Eastern Europe',
  languages: { ukr: 'Ukrainian' },
  translations: {
    ces: { official: 'Ukrajina', common: 'Ukrajina' },
    deu: { official: 'Ukraine', common: 'Ukraine' },
    est: { official: 'Ukraina', common: 'Ukraina' },
    fin: { official: 'Ukraina', common: 'Ukraina' },
    fra: { official: 'Ukraine', common: 'Ukraine' },
    hrv: { official: 'Ukrajina', common: 'Ukrajina' },
    hun: { official: 'Ukrajna', common: 'Ukrajna' },
    ita: { official: 'Ucraina', common: 'Ucraina' },
    jpn: { official: 'ウクライナ', common: 'ウクライナ' },
    kor: { official: '우크라이나', common: '우크라이나' },
    nld: { official: 'Oekraïne', common: 'Oekraïne' },
    per: { official: 'اوکراین', common: 'اوکراین' },
    pol: { official: 'Ukraina', common: 'Ukraina' },
    por: { official: 'Ucrânia', common: 'Ucrânia' },
    rus: { official: 'Украина', common: 'Украина' },
    slk: { official: 'Ukrajina', common: 'Ukrajina' },
    spa: { official: 'Ucrania', common: 'Ucrania' },
    swe: { official: 'Ukraina', common: 'Ukraina' },
    urd: { official: 'یوکرین', common: 'یوکرین' },
    zho: { official: '乌克兰', common: '乌克兰' },
  },
  latlng: [49.0, 32.0],
  landlocked: false,
  borders: ['BLR', 'HUN', 'MDA', 'POL', 'ROU', 'RUS', 'SVK'],
  area: 603500.0,
  demonyms: { eng: { f: 'Ukrainian', m: 'Ukrainian' }, fra: { f: 'Ukrainienne', m: 'Ukrainien' } },
  flag: '🇺🇦',
  maps: {
    googleMaps: 'https://goo.gl/maps/DvgJMiPJ7aozKFZv7',
    openStreetMaps: 'https://www.openstreetmap.org/relation/60199',
  },
  population: 44134693,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  gini: { '2019': 26.6 },
  flags: { svg: 'https://flagcdn.com/ua.svg', png: 'https://flagcdn.com/w320/ua.png' },
};
