import { Page } from '../entities';
import MainMenu from './MainMenu';

class MenuPage extends Page {
  private menu = new MainMenu();

  async openAllCountries(): Promise<void> {
    await this.menu.tapByIndex(0);
  }

  async openCountriesByRegion(): Promise<void> {
    await this.menu.tapByIndex(1);
  }

  getAllCountriesElement(): Detox.NativeElement {
    return this.menu.getMenuItemByIndex(0).getTextElement();
  }

  getCountriesByRegionElement(): Detox.NativeElement {
    return this.menu.getMenuItemByIndex(1).getTextElement();
  }
}

export default MenuPage;
