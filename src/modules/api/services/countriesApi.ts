import { ALL, BY_CODE, BY_REGION } from '../config';
import { Country, Region } from '../types';
import { get } from './axiosBase';

export const getAllCountries = () => get<Country[]>(ALL);

export const getCountriesByRegion = (region: Region) => get<Country[]>(`${BY_REGION}/${region}`);

export const getCountryByCode = (code: string) => get<Country>(`${BY_CODE}/${code}`);
