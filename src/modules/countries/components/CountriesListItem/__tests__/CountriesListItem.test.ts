import { fireEvent } from '@testing-library/react-native';
import { v4 } from 'uuid';

import { LocalCountry } from '~modules/state';
import { localCountry } from '~modules/state/__data__';
import { renderComponent, testIDs } from '~modules/tests';

import CountriesListItem, { CountriesListItemProps } from '../index';

const renderCountriesListItem = (props: CountriesListItemProps) =>
  renderComponent(CountriesListItem, props);

describe('countries', () => {
  describe('<CountriesListItem />', () => {
    it('renders countries list item', () => {
      const country: LocalCountry = {
        ...localCountry,
        id: v4(),
      };
      const countriesListItem = renderCountriesListItem({
        country,
        index: 0,
      });

      expect(countriesListItem.getByText(country.name)).toBeTruthy();
      expect(countriesListItem).toMatchSnapshot();
    });

    it('renders "-" if capital is empty', () => {
      const country: LocalCountry = {
        ...localCountry,
        id: v4(),
        capital: '',
      };
      const countriesListItem = renderCountriesListItem({
        country,
        index: 0,
      });

      expect(countriesListItem.getByText('-')).toBeTruthy();
    });

    it('calls on item press', () => {
      const onItemPress = jest.fn();
      const index = 4;
      const country: LocalCountry = {
        ...localCountry,
        id: v4(),
      };
      const countriesListItem = renderCountriesListItem({
        country,
        index,
        onItemPress,
      });

      fireEvent.press(countriesListItem.getByTestId(testIDs.countries.country));
      jest.runAllTimers();

      expect(onItemPress).toBeCalledTimes(1);
      expect(onItemPress).toBeCalledWith(index);
    });
  });
});
