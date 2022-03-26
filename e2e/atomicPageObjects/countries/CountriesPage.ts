import { FlatList, PageWithBackButton } from '../shared';

import type { ListItemContent } from '../../types';
import type ListItem from '../shared/ListItem';

class CountriesPage extends PageWithBackButton {
  protected list;

  constructor(listItems: ListItemContent[]) {
    super();
    this.list = new FlatList(listItems);
  }

  async scroll(): Promise<void> {
    await this.list.scrollToBottom();
    await this.list.scrollToTop();
  }

  async openCountry(): Promise<void> {
    await this.list.tapByIndex(0);
  }

  getListItem(): ListItem {
    return this.list.getListItemByIndex(0);
  }
}

export default CountriesPage;
