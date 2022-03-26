import { device } from 'detox';

import { detoxUtils } from './services';

beforeAll(async () => {
  await device.launchApp();
  await detoxUtils.disableAndroidEmulatorAnimations();
});
