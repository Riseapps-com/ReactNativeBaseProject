import { fireEvent } from '@testing-library/react-native';
import { useNavigation } from 'react-native-navigation-hooks';

import { mocked, renderComponent, testIDs } from '~modules/tests';

import { COUNTRIES_SCREEN_NAME, SELECT_REGION_SCREEN_NAME } from '../../../config';
import MenuItem from '../index';

const mockedUseNavigation = mocked(useNavigation);

const renderMenu = () => renderComponent(MenuItem);

describe('countries', () => {
  describe('<Menu />', () => {
    it('renders menu', () => {
      const menu = renderMenu();

      expect(menu.getByTestId(testIDs.menu.allCountries)).toBeTruthy();
      expect(menu.getByTestId(testIDs.menu.countriesByRegion)).toBeTruthy();
      expect(menu).toMatchSnapshot();
    });

    it('navigates to countries list', () => {
      const menu = renderMenu();

      fireEvent.press(menu.getByTestId(testIDs.menu.allCountries));
      jest.runAllTimers();

      expect(mockedUseNavigation().push).toBeCalledTimes(1);
      expect(mockedUseNavigation().push).toBeCalledWith(COUNTRIES_SCREEN_NAME);
    });

    it('navigates to select region menu', () => {
      const menu = renderMenu();

      fireEvent.press(menu.getByTestId(testIDs.menu.countriesByRegion));
      jest.runAllTimers();

      expect(mockedUseNavigation().push).toBeCalledTimes(1);
      expect(mockedUseNavigation().push).toBeCalledWith(SELECT_REGION_SCREEN_NAME);
    });
  });
});
