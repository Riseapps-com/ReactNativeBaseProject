import { Organism } from '../entities';
import MenuItem from './MenuItem';

import type { MenuItemContent } from '../../types';

class Menu extends Organism {
  protected _menuItems;

  constructor(menuItems: MenuItemContent[]) {
    super();
    this._menuItems = menuItems.map(menuItem => new MenuItem(menuItem.id, menuItem.image, menuItem.text));
  }

  getMenuItemByIndex(index: number): MenuItem {
    return this._menuItems[index];
  }

  async tapByIndex(index: number): Promise<void> {
    await this._menuItems[index].tap();
  }
}

export default Menu;
