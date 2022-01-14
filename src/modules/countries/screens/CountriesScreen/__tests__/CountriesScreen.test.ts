import { useRoute } from '@react-navigation/native';
import { act } from '@testing-library/react-native';

import { mocked, renderNavigationComponent } from '~modules/tests';

import { localCountry } from '../../../__data__';
import { countriesApi } from '../../../services';
import CountriesScreen from '../index';

jest.mock('../../../services');

const mockedCountriesApi = mocked(countriesApi);
const mockedUseRoute = mocked(useRoute);

const renderCountriesScreen = () => renderNavigationComponent(CountriesScreen, true);

describe('countries', () => {
  describe('<CountriesScreen />', () => {
    it('renders <CountriesScreen />', () => {
      mockedCountriesApi.getAllCountries.mockImplementationOnce(() => Promise.resolve([localCountry]));
      mockedUseRoute.mockImplementation(() => ({ params: {} } as any));

      const countriesScreen = renderCountriesScreen();

      act(() => jest.runAllTimers());

      expect(countriesScreen.getByTestId('Countries')).toBeTruthy();
    });
  });
});
