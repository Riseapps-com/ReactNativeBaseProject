import { testIDs } from '~config';
import { renderComponent } from '~modules/tests';

import SelectRegionMenuScreen from '../index';

const renderSelectRegionMenuScreen = () => renderComponent(SelectRegionMenuScreen);

describe('countries', () => {
  describe('<SelectRegionMenuScreen />', () => {
    it('render <SelectRegionMenuScreen />', () => {
      const selectRegionMenuScreen = renderSelectRegionMenuScreen();

      expect(selectRegionMenuScreen.getByTestId(testIDs.selectRegion.africa)).toBeTruthy();
      expect(selectRegionMenuScreen.getByTestId(testIDs.selectRegion.americas)).toBeTruthy();
      expect(selectRegionMenuScreen.getByTestId(testIDs.selectRegion.asia)).toBeTruthy();
      expect(selectRegionMenuScreen.getByTestId(testIDs.selectRegion.europe)).toBeTruthy();
      expect(selectRegionMenuScreen.getByTestId(testIDs.selectRegion.oceania)).toBeTruthy();
    });
  });
});
