import { detoxUtils } from '../../services';
import { Atom } from '../entities';

class Text extends Atom {
  protected text: string;

  constructor(text: string) {
    super();
    this.text = text;
  }

  getElement(): Detox.NativeElement {
    return detoxUtils.byText(this.text).atIndex(0);
  }
}

export default Text;
