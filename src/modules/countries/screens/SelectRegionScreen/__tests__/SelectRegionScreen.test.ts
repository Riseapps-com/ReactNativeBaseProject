import { renderComponent } from '~modules/tests';

import SelectRegionMenuScreen from '../index';

const renderSelectRegionMenuScreen = () => renderComponent(SelectRegionMenuScreen);

describe('countries', () => {
  describe('<SelectRegionMenuScreen />', () => {
    it('renders <SelectRegionMenuScreen />', () => {
      const selectRegionMenuScreen = renderSelectRegionMenuScreen();

      expect(selectRegionMenuScreen.getByTestId('africa')).toBeTruthy();
      expect(selectRegionMenuScreen.getByTestId('americas')).toBeTruthy();
      expect(selectRegionMenuScreen.getByTestId('asia')).toBeTruthy();
      expect(selectRegionMenuScreen.getByTestId('europe')).toBeTruthy();
      expect(selectRegionMenuScreen.getByTestId('oceania')).toBeTruthy();
    });
  });
});
