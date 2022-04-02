import { detoxUtils } from '../../services';
import { Molecule } from '../entities';
import Image from './Image';
import Text from './Text';

class MenuItem extends Molecule {
  private _id;

  private _image;

  private _text;

  constructor(id: string, image: string, text: string) {
    super();
    this._id = id;
    this._image = new Image(image);
    this._text = new Text(text);
  }

  get image(): Detox.IndexableNativeElement {
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
