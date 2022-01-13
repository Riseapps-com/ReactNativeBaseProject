import * as axiosBase from '../axiosBase';
import { ALL, BY_CODE, BY_REGION } from './config';
import { Country, Region } from './types';

export const getAllCountries = (): Promise<Country[]> => axiosBase.get<Country[]>(ALL);

export const getCountriesByRegion = (region: Region): Promise<Country[]> =>
  axiosBase.get<Country[]>(`${BY_REGION}/${region}`);

export const getCountryByCode = (code: string): Promise<Country[]> => axiosBase.get<Country[]>(`${BY_CODE}/${code}`);
