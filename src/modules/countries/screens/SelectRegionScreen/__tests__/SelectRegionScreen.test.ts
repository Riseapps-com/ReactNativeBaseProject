import { renderComponent } from '~modules/tests';

import SelectRegionMenuScreen from '../index';

const renderSelectRegionMenuScreen = () => renderComponent(SelectRegionMenuScreen);

describe('countries', () => {
  describe('<SelectRegionMenuScreen />', () => {
    it('render <SelectRegionMenuScreen />', () => {
      const selectRegionMenuScreen = renderSelectRegionMenuScreen();

      expect(selectRegionMenuScreen.getByA11yLabel('africa')).toBeTruthy();
      expect(selectRegionMenuScreen.getByA11yLabel('americas')).toBeTruthy();
      expect(selectRegionMenuScreen.getByA11yLabel('asia')).toBeTruthy();
      expect(selectRegionMenuScreen.getByA11yLabel('europe')).toBeTruthy();
      expect(selectRegionMenuScreen.getByA11yLabel('oceania')).toBeTruthy();
    });
  });
});
