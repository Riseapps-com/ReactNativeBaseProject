import { detoxUtils } from '../../../../services';
import { Atom } from '../../../entities';

class TextButton extends Atom {
  protected _text: string;

  constructor(text: string) {
    super();
    this._text = text;
  }

  get(): Detox.NativeElement {
    return detoxUtils.byText(this._text).atIndex(0);
  }

  async tap(): Promise<void> {
    await this.get().tap();
  }
}

export default TextButton;
