import { detoxUtils } from '../../../../services';
import { Template } from '../../../entities';

class ScrollView extends Template {
  private _id;

  constructor(id: string) {
    super();
    this._id = id;
  }

  async scrollDown(): Promise<void> {
    await detoxUtils.byId(this._id).scroll(200, 'down');
  }

  async scrollToTop(): Promise<void> {
    await detoxUtils.byId(this._id).scrollTo('top');
  }

  async scrollToBottom(): Promise<void> {
    await detoxUtils.byId(this._id).scrollTo('bottom');
  }
}

export default ScrollView;
