import { useRoute } from '@react-navigation/native';
import { act } from '@testing-library/react-native';

import { countriesApi } from '~modules/api';
import { country } from '~modules/api/__data__';
import { mocked, renderStoreComponent } from '~modules/tests';

import CountryDetailsScreen from '../index';

jest.mock('~modules/api');

const mockedCountriesApi = mocked(countriesApi);
const mockedUseRoute = mocked(useRoute);

const renderCountryDetailsScreen = () => renderStoreComponent(CountryDetailsScreen);

beforeAll(() => {
  mockedUseRoute.mockImplementation(() => ({ params: { code: country.cca2 } } as any));
});

describe('countries', () => {
  describe('<CountryDetailsScreen />', () => {
    it('renders <CountryDetailsScreen />', () => {
      mockedCountriesApi.getCountryByCode.mockImplementationOnce(() => Promise.resolve([country]));

      const countryDetailsScreen = renderCountryDetailsScreen();

      act(() => jest.runAllTimers());

      expect(countryDetailsScreen.getByText(country.name.common)).toBeTruthy();
    });
  });
});
