import { detoxUtils } from '../../services';
import { Molecule } from '../entities';
import Image from './Image';
import Text from './Text';

class MenuItem extends Molecule {
  private id;

  private image;

  private text;

  constructor(id: string, image: string, text: string) {
    super();
    this.id = id;
    this.image = new Image(image);
    this.text = new Text(text);
  }

  getImageElement(): Detox.IndexableNativeElement {
    return this.image.getElement();
  }

  getTextElement(): Detox.NativeElement {
    return this.text.getElement();
  }

  async tap(): Promise<void> {
    await detoxUtils.byId(this.id).tap();
  }
}

export default MenuItem;
