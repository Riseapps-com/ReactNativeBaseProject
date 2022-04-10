import { Page } from '../../../entities';
import BackButton from './BackButton';

class PageWithBackButton extends Page {
  private _backButton = new BackButton();

  get backButton(): Detox.NativeElement {
    return this._backButton.get();
  }

  async goBack(): Promise<void> {
    await this._backButton.tap();
  }
}

export default PageWithBackButton;
