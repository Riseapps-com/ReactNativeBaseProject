import { renderComponent } from '~modules/tests';

import MenuItemScreen from '../index';

const renderMenuScreen = () => renderComponent(MenuItemScreen);

describe('countries', () => {
  describe('<MenuScreen />', () => {
    it('renders <MenuScreen />', () => {
      const menuScreen = renderMenuScreen();

      expect(menuScreen.getByA11yLabel('All countries')).toBeTruthy();
      expect(menuScreen.getByA11yLabel('Countries by region')).toBeTruthy();
    });
  });
});
