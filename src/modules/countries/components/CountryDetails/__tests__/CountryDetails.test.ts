import { act } from '@testing-library/react-native';

import { countriesApi, Country } from '~modules/api';
import { country } from '~modules/api/__data__';
import { HttpRequestError } from '~modules/errors';
import { mocked, renderStoreComponent, testIDs } from '~modules/tests';

import CountryDetails, { CountryDetailsProps } from '../index';

jest.mock('~modules/api');

const mockedCountriesApi = mocked(countriesApi);

const renderCountryDetails = (props: CountryDetailsProps) =>
  renderStoreComponent(CountryDetails, props);

describe('countries', () => {
  describe('<CountryDetails />', () => {
    it('renders country details', () => {
      mockedCountriesApi.getCountryByCode.mockImplementationOnce(() => Promise.resolve(country));

      const countryDetails = renderCountryDetails({
        code: country.alpha2Code,
      });

      act(() => jest.runAllTimers());

      expect(countryDetails.getByText(country.name)).toBeTruthy();
    });

    it('renders "-" if data is not specified', () => {
      const remoteCountry: Country = {
        ...country,
        capital: '',
      };

      mockedCountriesApi.getCountryByCode.mockImplementationOnce(() =>
        Promise.resolve(remoteCountry)
      );

      const countryDetails = renderCountryDetails({
        code: country.alpha2Code,
      });

      act(() => jest.runAllTimers());

      expect(countryDetails.getByText('-')).toBeTruthy();
    });

    it('fetches country by code', () => {
      mockedCountriesApi.getCountryByCode.mockImplementationOnce(() => Promise.resolve(country));

      const countryDetails = renderCountryDetails({
        code: country.alpha2Code,
      });

      act(() => jest.runAllTimers());

      expect(countryDetails.getByText(country.name)).toBeTruthy();
      expect(mockedCountriesApi.getCountryByCode).toBeCalledTimes(1);
      expect(mockedCountriesApi.getCountryByCode).toBeCalledWith(country.alpha2Code.toLowerCase());
    });

    it('renders error if there was an error', () => {
      mockedCountriesApi.getCountryByCode.mockImplementationOnce(() => {
        throw new HttpRequestError(500);
      });

      const countryDetails = renderCountryDetails({
        code: country.alpha2Code,
      });

      act(() => jest.runAllTimers());

      expect(countryDetails.getByTestId(testIDs.global.error)).toBeTruthy();
    });
  });
});
