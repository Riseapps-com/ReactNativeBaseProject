import { e2eUtils, scriptsUtils } from '../services';

import type { AndroidOptions } from '../types';

const rebuildAppIfNeeded = (options: AndroidOptions): void => {
  if (!options.shouldRebuildApp) return;

  scriptsUtils.buildApp('android');
};

const runProgram = async (): Promise<void> => {
  const options = await e2eUtils.getAndroidOptions();

  rebuildAppIfNeeded(options);
  scriptsUtils.runDetox('android');
};

runProgram();
