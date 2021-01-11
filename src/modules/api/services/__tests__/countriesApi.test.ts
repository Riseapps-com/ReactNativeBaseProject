import { mocked } from '~modules/tests';

import { country } from '../../__data__/country';
import { ALL, BY_CODE, BY_REGION } from '../../config';
import { Region } from '../../types';
import * as axiosBase from '../axiosBase';
import * as countriesApi from '../countriesApi';

jest.mock('../axiosBase');

const mockedGet = mocked(axiosBase.get);

describe('api', () => {
  describe('countriesApi', () => {
    describe('getAllCountries', () => {
      it('returns all countries', async () => {
        mockedGet.mockImplementationOnce(() => Promise.resolve([country]));

        const result = await countriesApi.getAllCountries();

        expect(mockedGet).toBeCalledTimes(1);
        expect(mockedGet).toBeCalledWith(ALL);
        expect(result).toEqual([country]);
      });
    });

    describe('getCountriesByRegion', () => {
      it('returns countries by region', async () => {
        mockedGet.mockImplementationOnce(() => Promise.resolve([country]));
        const region: Region = 'europe';

        const result = await countriesApi.getCountriesByRegion(region);

        expect(mockedGet).toBeCalledTimes(1);
        expect(mockedGet).toBeCalledWith(`${BY_REGION}/${region}`);
        expect(result).toEqual([country]);
      });
    });

    describe('getCountryByCode', () => {
      it('returns countries by code', async () => {
        mockedGet.mockImplementationOnce(() => Promise.resolve(country));
        const code = 'CK';

        const result = await countriesApi.getCountryByCode(code);

        expect(mockedGet).toBeCalledTimes(1);
        expect(mockedGet).toBeCalledWith(`${BY_CODE}/${code}`);
        expect(result).toEqual(country);
      });
    });
  });
});
