import { detoxUtils } from '../../../../services';
import { Molecule } from '../../../entities';
import Image from '../Image';
import Text from '../Text';

import type { ListItemContent } from '../../../../types';

class ListItem extends Molecule {
  private _id;

  private readonly _image;

  private readonly _title;

  private readonly _subtitle;

  constructor(id: string, content: ListItemContent) {
    super();
    this._id = id;
    this._image = new Image(content.image);
    this._title = new Text(content.title);
    this._subtitle = new Text(content.subtitle);
  }

  get image(): Image {
    return this._image;
  }

  get title(): Text {
    return this._title;
  }

  get subtitle(): Text {
    return this._subtitle;
  }

  async tapByIndex(index: number): Promise<void> {
    await detoxUtils.byId(this._id).atIndex(index).tap();
  }
}

export default ListItem;
