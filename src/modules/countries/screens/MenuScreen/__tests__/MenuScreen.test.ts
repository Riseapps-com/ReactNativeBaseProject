import { testIDs } from '~config';
import { renderComponent } from '~modules/tests';

import MenuItemScreen from '../index';

const renderMenuScreen = () => renderComponent(MenuItemScreen);

describe('countries', () => {
  describe('<MenuScreen />', () => {
    it('renders <MenuScreen />', () => {
      const menuScreen = renderMenuScreen();

      expect(menuScreen.getByTestId(testIDs.menu.allCountries)).toBeTruthy();
      expect(menuScreen.getByTestId(testIDs.menu.countriesByRegion)).toBeTruthy();
    });
  });
});
