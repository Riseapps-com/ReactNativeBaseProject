import { detoxUtils } from '../../../../services';
import { Atom } from '../../../entities';

class Image extends Atom {
  protected _a11yLabel: string;

  constructor(a11yLabel: string) {
    super();
    this._a11yLabel = a11yLabel;
  }

  get(): Detox.NativeElement {
    return detoxUtils.byLabel(this._a11yLabel).atIndex(0);
  }
}

export default Image;
