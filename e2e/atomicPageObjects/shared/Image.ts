import { detoxUtils } from '../../services';
import { Atom } from '../entities';

class Image extends Atom {
  protected a11yLabel: string;

  constructor(a11yLabel: string) {
    super();
    this.a11yLabel = a11yLabel;
  }

  getElement(): Detox.IndexableNativeElement {
    return detoxUtils.byLabel(this.a11yLabel);
  }
}

export default Image;
