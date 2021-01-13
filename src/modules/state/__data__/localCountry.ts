import { LocalCountry } from '../stores';

const localCountry: Omit<LocalCountry, 'id'> = {
  name: 'Cook Islands',
  capital: 'Avarua',
  region: 'Oceania',
  subregion: 'Polynesia',
  timezones: ['UTC-10:00'],
  currencies: ['NZD', 'CKD'],
  alpha2Code: 'CK',
};

export { localCountry };
