import { Organism } from '../entities';
import MenuItem from './MenuItem';

import type { MenuItemContent } from '../../types';

class Menu extends Organism {
  protected menuItems;

  constructor(menuItems: MenuItemContent[]) {
    super();
    this.menuItems = menuItems.map(menuItem => new MenuItem(menuItem.id, menuItem.image, menuItem.text));
  }

  async tapByIndex(index: number): Promise<void> {
    await this.menuItems[index].tap();
  }

  getMenuItemByIndex(index: number): MenuItem {
    return this.menuItems[index];
  }
}

export default Menu;
