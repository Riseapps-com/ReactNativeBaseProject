import { v4 } from 'uuid';

import { Country } from '~modules/api';

import { LocalCountry } from '../types';

export const parseCountry = (country: Country): LocalCountry => ({
  id: v4(),
  name: country.name,
  capital: country.capital,
  region: country.region,
  subregion: country.subregion,
  timezones: country.timezones,
  currencies: country.currencies.map(currency => currency.code),
  alpha2Code: country.alpha2Code,
});

export const parseCountries = (countries: Country[]): LocalCountry[] => countries.map(parseCountry);
