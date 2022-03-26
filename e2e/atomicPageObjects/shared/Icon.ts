import { detoxUtils } from '../../services';
import { Atom } from '../entities';

class Icon extends Atom {
  protected a11yLabel: string;

  constructor(a11yLabel: string) {
    super();
    this.a11yLabel = a11yLabel;
  }

  async tap(): Promise<void> {
    await detoxUtils.byLabel(this.a11yLabel).atIndex(0).tap();
  }

  getElement(): Detox.NativeElement {
    return detoxUtils.byLabel(this.a11yLabel).atIndex(0);
  }
}

export default Icon;
