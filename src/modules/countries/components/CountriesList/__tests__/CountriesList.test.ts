import { useNavigation, useRoute } from '@react-navigation/native';
import { act, fireEvent } from '@testing-library/react-native';

import { mocked, renderNavigationComponent } from '~modules/tests';

import { localCountry } from '../../../__data__';
import { COUNTRY_DETAILS_SCREEN_NAME } from '../../../config';
import { countriesApi } from '../../../services';
import CountriesList from '../index';

import type { LocalRegion } from '../../../types';

jest.mock('../../../services');

const mockedCountriesApi = mocked(countriesApi);
const mockedUseRoute = mocked(useRoute);
const mockedUseNavigation = <typeof useNavigation>mocked(useNavigation);

const renderCountriesList = () => renderNavigationComponent(CountriesList, true);

describe('countries', () => {
  describe('<CountriesList />', () => {
    it('renders <CountriesList />', () => {
      mockedCountriesApi.getAllCountries.mockImplementationOnce(() => Promise.resolve([localCountry]));
      mockedUseRoute.mockImplementation(() => ({ params: {} } as any));

      const countriesList = renderCountriesList();

      act(() => jest.runAllTimers());

      expect(countriesList.getByTestId('Countries')).toBeTruthy();
    });

    it('fetches all countries', () => {
      mockedCountriesApi.getAllCountries.mockImplementationOnce(() => Promise.resolve([localCountry]));
      mockedUseRoute.mockImplementation(() => ({ params: {} } as any));

      const countriesList = renderCountriesList();

      act(() => jest.runAllTimers());

      expect(countriesList.getByText(localCountry.name)).toBeTruthy();
      expect(mockedCountriesApi.getAllCountries).toBeCalledTimes(1);
    });

    it('fetches countries by region', () => {
      const region: LocalRegion = 'oceania';

      mockedCountriesApi.getCountriesByRegion.mockImplementationOnce(() => Promise.resolve([localCountry]));
      mockedUseRoute.mockImplementation(() => ({ params: { region } } as any));

      const countriesList = renderCountriesList();

      act(() => jest.runAllTimers());

      expect(countriesList.getByText(localCountry.name)).toBeTruthy();
      expect(mockedCountriesApi.getCountriesByRegion).toBeCalledTimes(1);
      expect(mockedCountriesApi.getCountriesByRegion).toBeCalledWith(region);
    });

    it('navigates to country details', async () => {
      mockedCountriesApi.getAllCountries.mockImplementationOnce(() => Promise.resolve([localCountry]));
      mockedUseRoute.mockImplementation(() => ({ params: {} } as any));

      const countriesList = renderCountriesList();

      await act(async () => {
        jest.runAllTimers();
        await fireEvent.press(countriesList.getByText(localCountry.name));
      });

      expect(mockedUseNavigation().navigate).toBeCalledTimes(1);
      expect(mockedUseNavigation().navigate).toBeCalledWith(COUNTRY_DETAILS_SCREEN_NAME, {
        code: localCountry.cca2,
        title: localCountry.name,
      });
    });
  });
});
