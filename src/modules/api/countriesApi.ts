import { get } from './axiosBase';
import { Country, Region } from './types';

const ALL = 'all';
const BY_REGION = 'region';
const BY_CODE = 'alpha';

export const getAllCountries = () => get<Country[]>(ALL);

export const getCountriesByRegion = (region: Region) => get<Country[]>(`${BY_REGION}/${region}`);

export const getCountryByCode = (code: string) => get<Country>(`${BY_CODE}/${code}`);
