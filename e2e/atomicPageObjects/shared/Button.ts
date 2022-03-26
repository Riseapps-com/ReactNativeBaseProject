import { detoxUtils } from '../../services';
import { Atom } from '../entities';

class Button extends Atom {
  protected id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }

  async tap(): Promise<void> {
    await detoxUtils.byId(this.id).tap();
  }

  getElement(): Detox.IndexableNativeElement {
    return detoxUtils.byId(this.id);
  }
}

export default Button;
