import { useRoute } from '@react-navigation/native';
import { act } from '@testing-library/react-native';

import { mocked, renderNavigationComponent } from '~modules/tests';

import { localCountry } from '../../../__data__';
import { countriesApi } from '../../../services';
import { LocalCountry } from '../../../types';
import CountryDetails from '../index';

jest.mock('../../../services');

const mockedCountriesApi = mocked(countriesApi);
const mockedUseRoute = mocked(useRoute);

const renderCountryDetails = () => renderNavigationComponent(CountryDetails, true);

beforeAll(() => {
  mockedUseRoute.mockImplementation(() => ({ params: { code: localCountry.cca2 } } as any));
});

describe('countries', () => {
  describe('<CountryDetails />', () => {
    it('renders <CountryDetails />', () => {
      mockedCountriesApi.getCountryDetails.mockImplementationOnce(() =>
        Promise.resolve(localCountry)
      );

      const countryDetails = renderCountryDetails();

      act(() => jest.runAllTimers());

      expect(countryDetails.getByText(localCountry.name)).toBeTruthy();
    });

    it('renders placeholder if data is not specified', () => {
      const country: LocalCountry = {
        ...localCountry,
        capital: undefined,
      };

      mockedCountriesApi.getCountryDetails.mockImplementationOnce(() => Promise.resolve(country));

      const countryDetails = renderCountryDetails();

      act(() => jest.runAllTimers());

      expect(countryDetails.getByText('-')).toBeTruthy();
    });

    it('fetches country by code', () => {
      mockedCountriesApi.getCountryDetails.mockImplementationOnce(() =>
        Promise.resolve(localCountry)
      );

      const countryDetails = renderCountryDetails();

      act(() => jest.runAllTimers());

      expect(countryDetails.getByText(localCountry.name)).toBeTruthy();
      expect(mockedCountriesApi.getCountryDetails).toBeCalledTimes(1);
      expect(mockedCountriesApi.getCountryDetails).toBeCalledWith(localCountry.cca2);
    });
  });
});
