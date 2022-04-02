import { detoxUtils } from '../../services';
import { Atom } from '../entities';

class TextButton extends Atom {
  protected _text: string;

  constructor(text: string) {
    super();
    this._text = text;
  }

  get(): Detox.IndexableNativeElement {
    return detoxUtils.byText(this._text);
  }

  async tap(): Promise<void> {
    await detoxUtils.byText(this._text).tap();
  }
}

export default TextButton;
