import { useRoute } from '@react-navigation/native';
import { act } from '@testing-library/react-native';

import { testIDs } from '~config';
import { countriesApi } from '~modules/api';
import { country } from '~modules/api/__data__';
import { mocked, renderNavigationComponent } from '~modules/tests';

import CountriesScreen from '../index';

jest.mock('~modules/api');

const mockedCountriesApi = mocked(countriesApi);
const mockedUseRoute = mocked(useRoute);

const renderCountriesScreen = () => renderNavigationComponent(CountriesScreen);

describe('countries', () => {
  describe('<CountriesScreen />', () => {
    it('renders <CountriesScreen />', () => {
      mockedCountriesApi.getAllCountries.mockImplementationOnce(() => Promise.resolve([country]));
      mockedUseRoute.mockImplementation(() => ({ params: {} } as any));

      const countriesScreen = renderCountriesScreen();

      act(() => jest.runAllTimers());

      expect(countriesScreen.getByTestId(testIDs.countries.scrollContainer)).toBeTruthy();
    });
  });
});
