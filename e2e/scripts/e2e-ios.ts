import { exec } from 'shelljs';

import config from '../config.json';
import { e2eUtils, scriptsUtils } from '../services';

import type { IOSOptions } from '../types';

const openSimulatorIfNeeded = (options: IOSOptions): void => {
  if (!options.shouldOpenSimulator) return;

  // Opening the simulator...
  exec(`open -a Simulator --args -CurrentDeviceUDID ${config.ios.device.UDID}`);
};

const rebuildAppIfNeeded = (options: IOSOptions): void => {
  if (!options.shouldRebuildApp) return;

  scriptsUtils.buildApp('ios');
};

const runProgram = async (): Promise<void> => {
  const options = await e2eUtils.getIOSOptions();

  openSimulatorIfNeeded(options);
  rebuildAppIfNeeded(options);
  scriptsUtils.runDetox('ios');
};

runProgram();
