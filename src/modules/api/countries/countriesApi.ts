import * as axiosBase from '../axiosBase';

import type { Country, Region } from './types';

export const getAllCountries = (): Promise<Country[]> => axiosBase.get<Country[]>('all');

export const getCountriesByRegion = (region: Region): Promise<Country[]> =>
  axiosBase.get<Country[]>(`region/${region}`);

export const getCountryByCode = (code: string): Promise<Country[]> => axiosBase.get<Country[]>(`alpha/${code}`);
