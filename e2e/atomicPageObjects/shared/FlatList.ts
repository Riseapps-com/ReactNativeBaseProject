import { detoxUtils } from '../../services';
import { Organism } from '../entities';
import ListItem from './ListItem';

import type { ListItemContent } from '../../types';

class FlatList extends Organism {
  private _id = 'Countries';

  private readonly _listItems;

  constructor(listItems: ListItemContent[]) {
    super();
    this._listItems = listItems.map(listItem => new ListItem(listItem.image, listItem.title, listItem.subtitle));
  }

  getListItemByIndex(index: number): ListItem {
    return this._listItems[index];
  }

  async tapByIndex(index: number): Promise<void> {
    await this._listItems[index].tapByIndex(index);
  }

  async scrollDown(): Promise<void> {
    await detoxUtils.byId(this._id).scroll(200, 'down');
  }

  async scrollToTop(): Promise<void> {
    await detoxUtils.byId(this._id).scrollTo('top');
  }
}

export default FlatList;
