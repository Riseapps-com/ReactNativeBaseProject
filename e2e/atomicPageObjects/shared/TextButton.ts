import { detoxUtils } from '../../services';
import { Atom } from '../entities';

class TextButton extends Atom {
  protected text: string;

  constructor(text: string) {
    super();
    this.text = text;
  }

  async tap(): Promise<void> {
    await detoxUtils.byText(this.text).tap();
  }

  getElement(): Detox.IndexableNativeElement {
    return detoxUtils.byText(this.text);
  }
}

export default TextButton;
