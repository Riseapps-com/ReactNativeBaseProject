import { Menu } from '../shared';

class MainMenu extends Menu {
  constructor() {
    super([
      { id: 'All countries', image: 'flag', text: 'All Countries' },
      { id: 'Countries by region', image: 'region', text: 'Countries by Region' },
    ]);
  }
}

export default MainMenu;
