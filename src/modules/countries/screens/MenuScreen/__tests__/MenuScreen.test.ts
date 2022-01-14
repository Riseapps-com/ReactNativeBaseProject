import { renderComponent } from '~modules/tests';

import MenuItemScreen from '../index';

const renderMenuScreen = () => renderComponent(MenuItemScreen);

describe('countries', () => {
  describe('<MenuScreen />', () => {
    it('renders <MenuScreen />', () => {
      const menuScreen = renderMenuScreen();

      expect(menuScreen.getByTestId('All countries')).toBeTruthy();
      expect(menuScreen.getByTestId('Countries by region')).toBeTruthy();
    });
  });
});
