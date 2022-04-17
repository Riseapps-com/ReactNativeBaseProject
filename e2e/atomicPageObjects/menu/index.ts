import { Page } from '../entities';
import MainMenu from './MainMenu';

import type { MenuItem } from '../shared';

class MenuPage extends Page {
  private _menu = new MainMenu();

  get allCountries(): MenuItem {
    return this._menu.getMenuItemByIndex(0);
  }

  get countriesByRegion(): MenuItem {
    return this._menu.getMenuItemByIndex(1);
  }

  async openAllCountries(): Promise<void> {
    await this._menu.tapByIndex(0);
  }

  async openCountriesByRegion(): Promise<void> {
    await this._menu.tapByIndex(1);
  }
}

export default MenuPage;
