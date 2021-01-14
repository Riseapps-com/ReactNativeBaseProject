import { fireEvent } from '@testing-library/react-native';
import { useNavigation } from 'react-native-navigation-hooks';

import { testIDs } from '~config';
import { mocked, renderComponent } from '~modules/tests';

import { COUNTRIES_SCREEN_NAME } from '../../../config';
import SelectRegionMenu from '../index';

const mockedUseNavigation = mocked(useNavigation);

const renderSelectRegionMenu = () => renderComponent(SelectRegionMenu);

describe('countries', () => {
  describe('<SelectRegionMenu />', () => {
    it('render select region menu', () => {
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

      expect(mockedUseNavigation().push).toBeCalledTimes(1);
      expect(mockedUseNavigation().push).toBeCalledWith(COUNTRIES_SCREEN_NAME, {
        region: 'africa',
      });
    });
  });
});
