import { FlatList, PageWithBackButton } from '../shared';

import type { ListItemContent } from '../../types';
import type { ListItem } from '../shared';

class CountriesPage extends PageWithBackButton {
  protected _list;

  constructor(listItems: ListItemContent[]) {
    super();
    this._list = new FlatList('Countries', listItems);
  }

  get listItem(): ListItem {
    return this._list.getItemByIndex(0);
  }

  async scroll(): Promise<void> {
    await this._list.scrollDown();
    await this._list.scrollToTop();
  }

  async openCountry(): Promise<void> {
    await this._list.tapByIndex(0);
  }
}

export default CountriesPage;
