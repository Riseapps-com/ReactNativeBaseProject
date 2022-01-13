import { useNavigation } from '@react-navigation/native';
import { fireEvent } from '@testing-library/react-native';

import { I18n } from '~modules/localization';
import { mocked, renderComponent } from '~modules/tests';

import { COUNTRIES_SCREEN_NAME, SELECT_REGION_SCREEN_NAME } from '../../../config';
import MenuItem from '../index';

const mockedUseNavigation = <typeof useNavigation>mocked(useNavigation);

const renderMenu = () => renderComponent(MenuItem);

describe('countries', () => {
  describe('<Menu />', () => {
    it('renders <Menu />', () => {
      const menu = renderMenu();

      expect(menu.getByA11yLabel('All countries')).toBeTruthy();
      expect(menu.getByA11yLabel('All countries')).toBeTruthy();
      expect(menu).toMatchSnapshot();
    });

    it('navigates to countries list', () => {
      const menu = renderMenu();

      fireEvent.press(menu.getByA11yLabel('All countries'));
      jest.runAllTimers();

      expect(mockedUseNavigation().navigate).toBeCalledTimes(1);
      expect(mockedUseNavigation().navigate).toBeCalledWith(COUNTRIES_SCREEN_NAME, {
        title: I18n.t('allCountries'),
      });
    });

    it('navigates to select region menu', () => {
      const menu = renderMenu();

      fireEvent.press(menu.getByA11yLabel('Countries by region'));
      jest.runAllTimers();

      expect(mockedUseNavigation().navigate).toBeCalledTimes(1);
      expect(mockedUseNavigation().navigate).toBeCalledWith(SELECT_REGION_SCREEN_NAME);
    });
  });
});
