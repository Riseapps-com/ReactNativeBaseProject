import { detoxUtils } from '../../services';
import { Molecule } from '../entities';
import Image from './Image';
import Text from './Text';

class ListItem extends Molecule {
  private _id = 'Countries list item';

  private _image;

  private _title;

  private _subtitle;

  constructor(image: string, title: string, subtitle: string) {
    super();
    this._image = new Image(image);
    this._title = new Text(title);
    this._subtitle = new Text(subtitle);
  }

  get image(): Detox.NativeElement {
    return this._image.get();
  }

  get title(): Detox.NativeElement {
    return this._title.get();
  }

  get subtitle(): Detox.NativeElement {
    return this._subtitle.get();
  }

  async tapByIndex(index: number): Promise<void> {
    await detoxUtils.byId(this._id).atIndex(index).tap();
  }
}

export default ListItem;
