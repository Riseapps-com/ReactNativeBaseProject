import ListItem from '../ListItem';
import ScrollView from '../ScrollView';

import type { ListItemContent } from '../../../../types';

class FlatList extends ScrollView {
  private readonly _items;

  constructor(id: string, items: ListItemContent[]) {
    super(id);
    this._items = items.map(item => new ListItem('Countries list item', item));
  }

  getItemByIndex(index: number): ListItem {
    return this._items[index];
  }

  async tapByIndex(index: number): Promise<void> {
    await this._items[index].tapByIndex(index);
  }
}

export default FlatList;
