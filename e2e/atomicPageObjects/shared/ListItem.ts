import { detoxUtils } from '../../services';
import { Molecule } from '../entities';
import Image from './Image';
import Text from './Text';

class ListItem extends Molecule {
  private id = 'Countries list item';

  private image;

  private title;

  private subtitle;

  constructor(image: string, title: string, subtitle: string) {
    super();
    this.image = new Image(image);
    this.title = new Text(title);
    this.subtitle = new Text(subtitle);
  }

  async tapByIndex(index: number): Promise<void> {
    await detoxUtils.byId(this.id).atIndex(index).tap();
  }

  getImageElement(): Detox.IndexableNativeElement {
    return this.image.getElement();
  }

  getTitleElement(): Detox.NativeElement {
    return this.title.getElement();
  }

  getSubtitleElement(): Detox.NativeElement {
    return this.subtitle.getElement();
  }
}

export default ListItem;
