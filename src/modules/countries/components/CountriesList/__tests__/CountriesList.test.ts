import { useNavigation, useRoute } from '@react-navigation/native';
import { act, fireEvent } from '@testing-library/react-native';

import { testIDs } from '~config';
import { countriesApi, Region } from '~modules/api';
import { country } from '~modules/api/__data__';
import { HttpRequestError } from '~modules/errors';
import { mocked, renderNavigationComponent } from '~modules/tests';

import { COUNTRY_DETAILS_SCREEN_NAME } from '../../../config';
import CountriesList from '../index';

jest.mock('~modules/api');

const mockedCountriesApi = mocked(countriesApi);
const mockedUseRoute = mocked(useRoute);
const mockedUseNavigation = <typeof useNavigation>mocked(useNavigation);

const renderCountriesList = () => renderNavigationComponent(CountriesList);

describe('countries', () => {
  describe('<CountriesList />', () => {
    it('renders <CountriesList />', () => {
      mockedCountriesApi.getAllCountries.mockImplementationOnce(() => Promise.resolve([country]));
      mockedUseRoute.mockImplementation(() => ({ params: {} } as any));

      const countriesList = renderCountriesList();

      act(() => jest.runAllTimers());

      expect(countriesList.getByTestId(testIDs.countries.scrollContainer)).toBeTruthy();
    });

    it('fetches all countries', () => {
      mockedCountriesApi.getAllCountries.mockImplementationOnce(() => Promise.resolve([country]));
      mockedUseRoute.mockImplementation(() => ({ params: {} } as any));

      const countriesList = renderCountriesList();

      act(() => jest.runAllTimers());

      expect(countriesList.getByText(country.name.common)).toBeTruthy();
      expect(mockedCountriesApi.getAllCountries).toBeCalledTimes(1);
    });

    it('fetches countries by region', () => {
      const region: Region = 'oceania';

      mockedCountriesApi.getCountriesByRegion.mockImplementationOnce(() =>
        Promise.resolve([country])
      );
      mockedUseRoute.mockImplementation(() => ({ params: { region } } as any));

      const countriesList = renderCountriesList();

      act(() => jest.runAllTimers());

      expect(countriesList.getByText(country.name.common)).toBeTruthy();
      expect(mockedCountriesApi.getCountriesByRegion).toBeCalledTimes(1);
      expect(mockedCountriesApi.getCountriesByRegion).toBeCalledWith(region);
    });

    it('renders error if there was an error', () => {
      mockedCountriesApi.getAllCountries.mockImplementationOnce(() => {
        throw new HttpRequestError(500);
      });
      mockedUseRoute.mockImplementation(() => ({ params: {} } as any));

      const countriesList = renderCountriesList();

      act(() => jest.runAllTimers());

      expect(countriesList.getByTestId(testIDs.global.error)).toBeTruthy();
    });

    it('navigates to country details', async () => {
      mockedCountriesApi.getAllCountries.mockImplementationOnce(() => Promise.resolve([country]));
      mockedUseRoute.mockImplementation(() => ({ params: {} } as any));

      const countriesList = renderCountriesList();

      await act(async () => {
        jest.runAllTimers();
        await fireEvent.press(countriesList.getByText(country.name.common));
      });

      expect(mockedUseNavigation().navigate).toBeCalledTimes(1);
      expect(mockedUseNavigation().navigate).toBeCalledWith(COUNTRY_DETAILS_SCREEN_NAME, {
        code: country.cca2,
        title: country.name.common,
      });
    });
  });
});
