import { useRoute } from '@react-navigation/native';
import { act } from '@testing-library/react-native';

import { mocked, renderNavigationComponent } from '~modules/tests';

import { localCountry } from '../../../__data__';
import { countriesApi } from '../../../services';
import CountryDetailsScreen from '../index';

jest.mock('../../../services');

const mockedCountriesApi = mocked(countriesApi);
const mockedUseRoute = mocked(useRoute);

const renderCountryDetailsScreen = () => renderNavigationComponent(CountryDetailsScreen);

beforeAll(() => {
  mockedUseRoute.mockImplementation(() => ({ params: { code: localCountry.cca2 } } as any));
});

describe('countries', () => {
  describe('<CountryDetailsScreen />', () => {
    it('renders <CountryDetailsScreen />', () => {
      mockedCountriesApi.getCountryDetails.mockImplementationOnce(() => Promise.resolve(localCountry));

      const countryDetailsScreen = renderCountryDetailsScreen();

      act(() => jest.runAllTimers());

      expect(countryDetailsScreen.getByText(localCountry.name)).toBeTruthy();
    });
  });
});
