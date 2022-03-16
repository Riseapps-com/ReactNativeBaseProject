import { countriesApi } from '~modules/api';
import { dataTransformUtilities } from '~modules/dataTransforms';

import { log } from '../logger';
import * as countriesParsers from './countriesParsers';

import type { LocalCountry } from '../types';
import type { Region } from '~modules/api/countries/types';

export const getAllCountries = async (): Promise<LocalCountry[]> => {
  log('getAllCountries');

  const countries = await countriesApi.getAllCountries();

  return countriesParsers.parseToLocalCountries(countries).sort(dataTransformUtilities.comparator('name'));
};

export const getCountriesByRegion = async (region: Region): Promise<LocalCountry[]> => {
  log('getCountriesByRegion', { region });

  const countries = await countriesApi.getCountriesByRegion(region);

  return countriesParsers.parseToLocalCountries(countries).sort(dataTransformUtilities.comparator('name'));
};

export const getCountryDetails = async (code: string): Promise<LocalCountry> => {
  log('getCountryDetails', { code });

  const countries = await countriesApi.getCountryByCode(code);
  const country = countries[0];

  return countriesParsers.parseToLocalCountry(country);
};
