import { countriesApi } from '~modules/api';
import { country } from '~modules/api/__data__';
import { HttpRequestError } from '~modules/errors';
import { LocalCountry } from '~modules/state';
import { mocked } from '~modules/tests';

import { localCountry } from '../../../__data__';
import CountriesStore from '../CountriesStore';

jest.mock('~modules/api');

const mockedCountriesApi = mocked(countriesApi);

describe('store', () => {
  describe('countries', () => {
    describe('countriesStore', () => {
      describe('defaults', () => {
        it('sets default values after constructor', () => {
          const countriesStore = new CountriesStore();

          expect(countriesStore.localAllCountries).toHaveLength(0);
          expect(countriesStore.localCountriesByRegion).toHaveLength(0);
          expect(countriesStore.localCountryByCode).toBeUndefined();
          expect(countriesStore.areAllCountriesLoading).toBeFalsy();
          expect(countriesStore.areCountriesByRegionLoading).toBeFalsy();
          expect(countriesStore.isCountryByCodeLoading).toBeFalsy();
          expect(countriesStore.allCountriesError).toBeUndefined();
          expect(countriesStore.countriesByRegionError).toBeUndefined();
          expect(countriesStore.countryByCodeError).toBeUndefined();
        });

        it('resets store', () => {
          const countriesStore = new CountriesStore();

          countriesStore.reset();

          expect(countriesStore.localAllCountries).toHaveLength(0);
          expect(countriesStore.localCountriesByRegion).toHaveLength(0);
          expect(countriesStore.localCountryByCode).toBeUndefined();
          expect(countriesStore.areAllCountriesLoading).toBeFalsy();
          expect(countriesStore.areCountriesByRegionLoading).toBeFalsy();
          expect(countriesStore.isCountryByCodeLoading).toBeFalsy();
          expect(countriesStore.allCountriesError).toBeUndefined();
          expect(countriesStore.countriesByRegionError).toBeUndefined();
          expect(countriesStore.countryByCodeError).toBeUndefined();
        });
      });

      describe('allCountries', () => {
        it('gets all countries', async () => {
          mockedCountriesApi.getAllCountries.mockImplementationOnce(() =>
            Promise.resolve([country])
          );

          const countriesStore = new CountriesStore();

          await countriesStore.getAllCountries();

          const [{ id, ...restLocalCountry }] = countriesStore.localAllCountries;

          expect([restLocalCountry]).toEqual([localCountry]);
          expect(mockedCountriesApi.getAllCountries).toBeCalledTimes(1);
        });

        it('resets all countries', async () => {
          mockedCountriesApi.getAllCountries.mockImplementationOnce(() =>
            Promise.resolve([country])
          );

          const countriesStore = new CountriesStore();

          await countriesStore.getAllCountries();
          countriesStore.resetAllCountries();

          expect(countriesStore.localAllCountries).toHaveLength(0);
        });

        it('sets error message if there was an error', async () => {
          mockedCountriesApi.getAllCountries.mockImplementationOnce(() => {
            throw new HttpRequestError(500);
          });

          const countriesStore = new CountriesStore();

          await countriesStore.getAllCountries();

          expect(countriesStore.allCountriesError).toEqual('serverErrorException');
          expect(countriesStore.localAllCountries).toHaveLength(0);
        });
      });

      describe('countriesByRegion', () => {
        it('gets countries by region', async () => {
          mockedCountriesApi.getCountriesByRegion.mockImplementationOnce(() =>
            Promise.resolve([country])
          );

          const countriesStore = new CountriesStore();

          await countriesStore.getCountriesByRegion('oceania');

          const [{ id, ...restCountryByRegion }] = countriesStore.localCountriesByRegion;

          expect([restCountryByRegion]).toEqual([localCountry]);
          expect(mockedCountriesApi.getCountriesByRegion).toBeCalledTimes(1);
          expect(mockedCountriesApi.getCountriesByRegion).toBeCalledWith('oceania');
        });

        it('resets countries by region', async () => {
          mockedCountriesApi.getCountriesByRegion.mockImplementationOnce(() =>
            Promise.resolve([country])
          );

          const countriesStore = new CountriesStore();

          await countriesStore.getCountriesByRegion('oceania');
          countriesStore.resetCountriesByRegion();

          expect(countriesStore.localCountriesByRegion).toHaveLength(0);
        });

        it('sets error message if there was an error', async () => {
          mockedCountriesApi.getCountriesByRegion.mockImplementationOnce(() => {
            throw new HttpRequestError(500);
          });

          const countriesStore = new CountriesStore();

          await countriesStore.getCountriesByRegion('oceania');

          expect(countriesStore.countriesByRegionError).toEqual('serverErrorException');
          expect(countriesStore.localCountriesByRegion).toHaveLength(0);
        });
      });

      describe('countryByCode', () => {
        it('gets country by code', async () => {
          mockedCountriesApi.getCountryByCode.mockImplementationOnce(() =>
            Promise.resolve([country])
          );

          const countriesStore = new CountriesStore();

          await countriesStore.getCountryByCode('CK');

          const { id, ...restCountryByCode } = countriesStore.localCountryByCode as LocalCountry;

          expect(restCountryByCode).toEqual(localCountry);
          expect(mockedCountriesApi.getCountryByCode).toBeCalledTimes(1);
          expect(mockedCountriesApi.getCountryByCode).toBeCalledWith('CK'.toLowerCase());
        });

        it('resets country by code', async () => {
          mockedCountriesApi.getCountryByCode.mockImplementationOnce(() =>
            Promise.resolve([country])
          );

          const countriesStore = new CountriesStore();

          await countriesStore.getCountryByCode('CK');
          countriesStore.resetCountryByCode();

          expect(countriesStore.localCountryByCode).toBeUndefined();
        });

        it('sets error message if there was an error', async () => {
          mockedCountriesApi.getCountryByCode.mockImplementationOnce(() => {
            throw new HttpRequestError(500);
          });

          const countriesStore = new CountriesStore();

          await countriesStore.getCountryByCode('CK');

          expect(countriesStore.countryByCodeError).toEqual('serverErrorException');
          expect(countriesStore.localCountryByCode).toBeUndefined();
        });
      });
    });
  });
});
