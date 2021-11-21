import { countriesApi, Region } from '~modules/api';
import { dataTransformUtilities } from '~modules/dataTransforms';

import { log } from '../logger';
import * as countriesParsers from './countriesParsers';

export const getAllCountries = async () => {
  log('getAllCountries');

  const countries = await countriesApi.getAllCountries();

  return countriesParsers
    .parseToLocalCountries(countries)
    .sort(dataTransformUtilities.comparator('name'));
};

export const getCountriesByRegion = async (region: Region) => {
  log('getCountriesByRegion', { region });

  const countries = await countriesApi.getCountriesByRegion(region);

  return countriesParsers
    .parseToLocalCountries(countries)
    .sort(dataTransformUtilities.comparator('name'));
};

export const getCountryDetails = async (code: string) => {
  log('getCountryDetails', { code });

  const countries = await countriesApi.getCountryByCode(code);
  const country = countries[0];

  return countriesParsers.parseToLocalCountry(country);
};
