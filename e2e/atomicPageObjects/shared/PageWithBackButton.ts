import { Page } from '../entities';
import BackButton from './BackButton';

class PageWithBackButton extends Page {
  private backButton = new BackButton();

  async goBack(): Promise<void> {
    await this.backButton.tap();
  }

  getBackButtonElement(): Detox.NativeElement {
    return this.backButton.getElement();
  }
}

export default PageWithBackButton;
