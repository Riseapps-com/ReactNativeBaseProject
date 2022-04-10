import { detoxUtils } from '../../../../services';
import { Atom } from '../../../entities';

class Button extends Atom {
  protected _id: string;

  constructor(id: string) {
    super();
    this._id = id;
  }

  get(): Detox.NativeElement {
    return detoxUtils.byId(this._id).atIndex(0);
  }

  async tap(): Promise<void> {
    await this.get().tap();
  }
}

export default Button;
