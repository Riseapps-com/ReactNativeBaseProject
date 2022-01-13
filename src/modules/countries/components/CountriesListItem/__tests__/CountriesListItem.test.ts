import { fireEvent } from '@testing-library/react-native';

import { renderComponent } from '~modules/tests';

import { localCountry } from '../../../__data__';
import { LocalCountry } from '../../../types';
import CountriesListItem, { CountriesListItemProps } from '../index';

const renderCountriesListItem = (props: CountriesListItemProps) => renderComponent(CountriesListItem, props);

describe('countries', () => {
  describe('<CountriesListItem />', () => {
    it('renders <CountriesListItem />', () => {
      const countriesListItem = renderCountriesListItem({
        country: localCountry,
        index: 0,
      });

      expect(countriesListItem.getByText(localCountry.name)).toBeTruthy();
      expect(countriesListItem).toMatchSnapshot();
    });

    it('renders placeholder if capital is empty', () => {
      const country: LocalCountry = {
        ...localCountry,
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
      const countriesListItem = renderCountriesListItem({
        country: localCountry,
        index,
        onItemPress,
      });

      fireEvent.press(countriesListItem.getByA11yLabel('Countries list item'));
      jest.runAllTimers();

      expect(onItemPress).toBeCalledTimes(1);
      expect(onItemPress).toBeCalledWith(index);
    });
  });
});
