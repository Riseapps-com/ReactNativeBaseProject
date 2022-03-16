import { exec } from 'shelljs';

import e2e from '../e2e/e2e.config.json';

import type { ShellString } from 'shelljs';

const withSimulator = process.argv.includes('--withSimulator');

const openSimulator = (): ShellString => exec(`open -a Simulator --args -CurrentDeviceUDID ${e2e.ios.device.UDID}`);
const detoxBuild = (): ShellString => exec('detox build --configuration ios');
const detoxTest = (): ShellString => exec('detox test --configuration ios');

if (withSimulator) {
  openSimulator();
}

detoxBuild();
detoxTest();
