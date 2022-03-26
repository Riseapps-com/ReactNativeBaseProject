import { Menu } from '../shared';

class SelectRegionMenu extends Menu {
  constructor() {
    super([
      { id: 'africa', image: 'africa', text: 'Africa' },
      { id: 'americas', image: 'americas', text: 'Americas' },
      { id: 'asia', image: 'asia', text: 'Asia' },
      { id: 'europe', image: 'europe', text: 'Europe' },
      { id: 'oceania', image: 'oceania', text: 'Oceania' },
    ]);
  }
}

export default SelectRegionMenu;
