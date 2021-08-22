import { fireEvent } from '@testing-library/react-native';

import { testIDs } from '~config';
import { I18n } from '~modules/localization';
import { mockedUseNavigation, renderComponent } from '~modules/tests';

import { COUNTRIES_SCREEN_NAME } from '../../../config';
import SelectRegionMenu from '../index';

const renderSelectRegionMenu = () => renderComponent(SelectRegionMenu);

describe('countries', () => {
  describe('<SelectRegionMenu />', () => {
    it('render <SelectRegionMenu />', () => {
      const selectRegionMenu = renderSelectRegionMenu();

      expect(selectRegionMenu.getByTestId(testIDs.selectRegion.africa)).toBeTruthy();
      expect(selectRegionMenu.getByTestId(testIDs.selectRegion.americas)).toBeTruthy();
      expect(selectRegionMenu.getByTestId(testIDs.selectRegion.asia)).toBeTruthy();
      expect(selectRegionMenu.getByTestId(testIDs.selectRegion.europe)).toBeTruthy();
      expect(selectRegionMenu.getByTestId(testIDs.selectRegion.oceania)).toBeTruthy();
      expect(selectRegionMenu).toMatchSnapshot();
    });

    it('navigates to countries', async () => {
      const selectRegionMenu = renderSelectRegionMenu();

      fireEvent.press(selectRegionMenu.getByTestId(testIDs.selectRegion.africa));
      jest.runAllTimers();

      expect(mockedUseNavigation().navigate).toBeCalledTimes(1);
      expect(mockedUseNavigation().navigate).toBeCalledWith(COUNTRIES_SCREEN_NAME, {
        region: 'africa',
        title: I18n.t('africa'),
      });
    });
  });
});
