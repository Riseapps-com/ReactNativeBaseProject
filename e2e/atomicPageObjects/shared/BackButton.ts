import { detoxUtils } from '../../services';
import { Atom } from '../entities';

class BackButton extends Atom {
  async tap(): Promise<void> {
    await detoxUtils.byId('Back').atIndex(0).tap();
  }

  getElement(): Detox.NativeElement {
    return detoxUtils.byId('Back').atIndex(0);
  }
}

export default BackButton;
