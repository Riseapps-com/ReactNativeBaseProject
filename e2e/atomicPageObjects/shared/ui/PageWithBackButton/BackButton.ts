import { detoxUtils } from '../../../../services';
import { Atom } from '../../../entities';

class BackButton extends Atom {
  get(): Detox.NativeElement {
    return detoxUtils.byId('Back').atIndex(0);
  }

  async tap(): Promise<void> {
    await this.get().tap();
  }
}

export default BackButton;
