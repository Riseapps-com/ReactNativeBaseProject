import { detoxUtils } from '../../services';
import { Organism } from '../entities';
import ListItem from './ListItem';

import type { ListItemContent } from '../../types';

class FlatList extends Organism {
  private id = 'Countries';

  private readonly listItems;

  constructor(listItems: ListItemContent[]) {
    super();
    this.listItems = listItems.map(listItem => new ListItem(listItem.image, listItem.title, listItem.subtitle));
  }

  async tapByIndex(index: number): Promise<void> {
    await this.listItems[index].tapByIndex(index);
  }

  async scrollToBottom(): Promise<void> {
    await detoxUtils.byId(this.id).scroll(200, 'down');
  }

  async scrollToTop(): Promise<void> {
    await detoxUtils.byId(this.id).scrollTo('top');
  }

  getListItemByIndex(index: number): ListItem {
    return this.listItems[index];
  }
}

export default FlatList;
