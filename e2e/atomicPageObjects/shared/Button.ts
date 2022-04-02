import { detoxUtils } from '../../services';
import { Atom } from '../entities';

class Button extends Atom {
  protected _id: string;

  constructor(id: string) {
    super();
    this._id = id;
  }

  get(): Detox.IndexableNativeElement {
    return detoxUtils.byId(this._id);
  }

  async tap(): Promise<void> {
    await detoxUtils.byId(this._id).tap();
  }
}

export default Button;
