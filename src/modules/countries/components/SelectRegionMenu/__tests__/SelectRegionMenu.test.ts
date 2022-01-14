import { useNavigation } from '@react-navigation/native';
import { fireEvent } from '@testing-library/react-native';

import { I18n } from '~modules/localization';
import { mocked, renderComponent } from '~modules/tests';

import { COUNTRIES_SCREEN_NAME } from '../../../config';
import SelectRegionMenu from '../index';

const mockedUseNavigation = <typeof useNavigation>mocked(useNavigation);

const renderSelectRegionMenu = () => renderComponent(SelectRegionMenu);

describe('countries', () => {
  describe('<SelectRegionMenu />', () => {
    it('renders <SelectRegionMenu />', () => {
      const selectRegionMenu = renderSelectRegionMenu();

      expect(selectRegionMenu.getByA11yLabel('africa')).toBeTruthy();
      expect(selectRegionMenu.getByA11yLabel('americas')).toBeTruthy();
      expect(selectRegionMenu.getByA11yLabel('asia')).toBeTruthy();
      expect(selectRegionMenu.getByA11yLabel('europe')).toBeTruthy();
      expect(selectRegionMenu.getByA11yLabel('oceania')).toBeTruthy();
      expect(selectRegionMenu).toMatchSnapshot();
    });

    it('navigates to countries', async () => {
      const selectRegionMenu = renderSelectRegionMenu();

      fireEvent.press(selectRegionMenu.getByA11yLabel('africa'));
      jest.runAllTimers();

      expect(mockedUseNavigation().navigate).toBeCalledTimes(1);
      expect(mockedUseNavigation().navigate).toBeCalledWith(COUNTRIES_SCREEN_NAME, {
        region: 'africa',
        title: I18n.t('africa'),
      });
    });
  });
});
