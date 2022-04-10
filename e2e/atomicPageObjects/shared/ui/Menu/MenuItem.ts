import { detoxUtils } from '../../../../services';
import { Molecule } from '../../../entities';
import Image from '../Image';
import Text from '../Text';

import type { MenuItemContent } from '../../../../types';

class MenuItem extends Molecule {
  private _id;

  private _image;

  private _text;

  constructor(content: MenuItemContent) {
    super();
    this._id = content.id;
    this._image = new Image(content.image);
    this._text = new Text(content.text);
  }

  get image(): Detox.NativeElement {
    return this._image.get();
  }

  get text(): Detox.NativeElement {
    return this._text.get();
  }

  async tap(): Promise<void> {
    await detoxUtils.byId(this._id).tap();
  }
}

export default MenuItem;
