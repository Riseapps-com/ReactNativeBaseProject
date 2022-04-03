import * as axiosBase from '../axiosBase';
import { ALL, ALPHA, REGION } from './config';

import type { Country, Region } from './types';

export const getAllCountries = (): Promise<Country[]> => axiosBase.get<Country[]>(ALL);

export const getCountriesByRegion = (region: Region): Promise<Country[]> => axiosBase.get<Country[]>(REGION(region));

export const getCountryByCode = (code: string): Promise<Country[]> => axiosBase.get<Country[]>(ALPHA(code));
