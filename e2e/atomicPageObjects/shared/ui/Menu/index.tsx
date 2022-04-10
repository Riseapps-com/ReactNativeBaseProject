import { Organism } from '../../../entities';
import MenuItem from './MenuItem';

import type { MenuItemContent } from '../../../../types';

class Menu extends Organism {
  protected _menuItems;

  constructor(items: MenuItemContent[]) {
    super();
    this._menuItems = items.map(item => new MenuItem(item));
  }

  getMenuItemByIndex(index: number): MenuItem {
    return this._menuItems[index];
  }

  async tapByIndex(index: number): Promise<void> {
    await this._menuItems[index].tap();
  }
}

export default Menu;
