import { act, fireEvent } from '@testing-library/react-native';
import { useNavigation } from 'react-native-navigation-hooks';

import { testIDs } from '~assets';
import { countriesApi, Region } from '~modules/api';
import { country } from '~modules/api/__data__';
import { HttpRequestError } from '~modules/errors';
import { mocked, renderNavigationComponent } from '~modules/tests';

import { COUNTRY_DETAILS_SCREEN_NAME } from '../../../config';
import CountriesList, { CountriesListProps } from '../index';

jest.mock('~modules/api');

const mockedCountriesApi = mocked(countriesApi);
const mockedNavigation = mocked(useNavigation);

const renderCountriesList = (props: CountriesListProps) =>
  renderNavigationComponent(CountriesList, props);

describe('countries', () => {
  describe('<CountriesList />', () => {
    it('renders countries list', () => {
      mockedCountriesApi.getAllCountries.mockImplementationOnce(() => Promise.resolve([country]));

      const countriesList = renderCountriesList({});

      act(() => jest.runAllTimers());

      expect(countriesList.getByTestId(testIDs.countries.scrollContainer)).toBeTruthy();
    });

    it('fetches all countries', () => {
      mockedCountriesApi.getAllCountries.mockImplementationOnce(() => Promise.resolve([country]));

      const countriesList = renderCountriesList({});

      act(() => jest.runAllTimers());

      expect(countriesList.getByText(country.name)).toBeTruthy();
      expect(mockedCountriesApi.getAllCountries).toBeCalledTimes(1);
    });

    it('fetches countries by region', () => {
      mockedCountriesApi.getCountriesByRegion.mockImplementationOnce(() =>
        Promise.resolve([country])
      );
      const region: Region = 'oceania';

      const countriesList = renderCountriesList({
        region,
      });

      act(() => jest.runAllTimers());

      expect(countriesList.getByText(country.name)).toBeTruthy();
      expect(mockedCountriesApi.getCountriesByRegion).toBeCalledTimes(1);
      expect(mockedCountriesApi.getCountriesByRegion).toBeCalledWith(region);
    });

    it('renders error if there was an error', () => {
      mockedCountriesApi.getAllCountries.mockImplementationOnce(() => {
        throw new HttpRequestError(500);
      });

      const countriesList = renderCountriesList({});

      act(() => jest.runAllTimers());

      expect(countriesList.getByTestId(testIDs.global.error)).toBeTruthy();
    });

    it('navigates to country details', async () => {
      mockedCountriesApi.getAllCountries.mockImplementationOnce(() => Promise.resolve([country]));

      const countriesList = renderCountriesList({});

      await act(async () => {
        jest.runAllTimers();
        await fireEvent.press(countriesList.getByText(country.name));
      });

      expect(mockedNavigation().push).toBeCalledTimes(1);
      expect(mockedNavigation().push).toBeCalledWith(COUNTRY_DETAILS_SCREEN_NAME, {
        code: country.alpha2Code,
        title: country.name,
      });
    });
  });
});
