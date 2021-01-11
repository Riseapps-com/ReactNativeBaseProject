import { ALL, BY_CODE, BY_REGION } from '../config';
import { Country, Region } from '../types';
import * as axiosBase from './axiosBase';

export const getAllCountries = () => axiosBase.get<Country[]>(ALL);

export const getCountriesByRegion = (region: Region) =>
  axiosBase.get<Country[]>(`${BY_REGION}/${region}`);

export const getCountryByCode = (code: string) => axiosBase.get<Country>(`${BY_CODE}/${code}`);
