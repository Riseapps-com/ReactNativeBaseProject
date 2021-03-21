import { useRoute } from '@react-navigation/native';
import { act } from '@testing-library/react-native';

import { testIDs } from '~config';
import { countriesApi, Country } from '~modules/api';
import { country } from '~modules/api/__data__';
import { HttpRequestError } from '~modules/errors';
import { mocked, renderStoreComponent } from '~modules/tests';

import CountryDetails from '../index';

jest.mock('~modules/api');

const mockedCountriesApi = mocked(countriesApi);
const mockedUseRoute = mocked(useRoute);

const renderCountryDetails = () => renderStoreComponent(CountryDetails);

beforeAll(() => {
  mockedUseRoute.mockImplementation(() => ({ params: { code: country.alpha2Code } } as any));
});

describe('countries', () => {
  describe('<CountryDetails />', () => {
    it('renders <CountryDetails />', () => {
      mockedCountriesApi.getCountryByCode.mockImplementationOnce(() => Promise.resolve(country));

      const countryDetails = renderCountryDetails();

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

      const countryDetails = renderCountryDetails();

      act(() => jest.runAllTimers());

      expect(countryDetails.getByText('-')).toBeTruthy();
    });

    it('fetches country by code', () => {
      mockedCountriesApi.getCountryByCode.mockImplementationOnce(() => Promise.resolve(country));

      const countryDetails = renderCountryDetails();

      act(() => jest.runAllTimers());

      expect(countryDetails.getByText(country.name)).toBeTruthy();
      expect(mockedCountriesApi.getCountryByCode).toBeCalledTimes(1);
      expect(mockedCountriesApi.getCountryByCode).toBeCalledWith(country.alpha2Code.toLowerCase());
    });

    it('renders error if there was an error', () => {
      mockedCountriesApi.getCountryByCode.mockImplementationOnce(() => {
        throw new HttpRequestError(500);
      });

      const countryDetails = renderCountryDetails();

      act(() => jest.runAllTimers());

      expect(countryDetails.getByTestId(testIDs.global.error)).toBeTruthy();
    });
  });
});
