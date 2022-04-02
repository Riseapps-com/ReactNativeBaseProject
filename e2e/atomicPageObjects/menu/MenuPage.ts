import { Page } from '../entities';
import MainMenu from './MainMenu';

class MenuPage extends Page {
  private _menu = new MainMenu();

  get allCountries(): Detox.NativeElement {
    return this._menu.getMenuItemByIndex(0).text;
  }

  get countriesByRegion(): Detox.NativeElement {
    return this._menu.getMenuItemByIndex(1).text;
  }

  async openAllCountries(): Promise<void> {
    await this._menu.tapByIndex(0);
  }

  async openCountriesByRegion(): Promise<void> {
    await this._menu.tapByIndex(1);
  }
}

export default MenuPage;
