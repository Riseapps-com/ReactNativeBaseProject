import { detoxUtils } from '../../services';
import { Atom } from '../entities';

class Text extends Atom {
  protected _text: string;

  constructor(text: string) {
    super();
    this._text = text;
  }

  get(): Detox.NativeElement {
    return detoxUtils.byText(this._text).atIndex(0);
  }
}

export default Text;
