import { PageWithBackButton } from '../shared';
import SelectRegionMenu from './SelectRegionMenu';

class SelectRegionPage extends PageWithBackButton {
  private menu = new SelectRegionMenu();

  async openAfrica(): Promise<void> {
    await this.menu.tapByIndex(0);
  }

  async openAmericas(): Promise<void> {
    await this.menu.tapByIndex(1);
  }

  async openAsia(): Promise<void> {
    await this.menu.tapByIndex(2);
  }

  async openEurope(): Promise<void> {
    await this.menu.tapByIndex(3);
  }

  async openOceania(): Promise<void> {
    await this.menu.tapByIndex(4);
  }
}

export default SelectRegionPage;
