import { exec, ShellString } from 'shelljs';

import e2e from '../config/e2e';

const withSimulator = process.argv.includes('--withSimulator');

const openSimulator = (): ShellString => exec(`open -a Simulator --args -CurrentDeviceUDID ${e2e.iosDeviceUDID}`);
const detoxBuild = (): ShellString => exec('detox build --configuration ios.sim.debug');
const detoxTest = (): ShellString => exec('detox test --configuration ios.sim.debug');

if (withSimulator) {
  openSimulator();
}

detoxBuild();
detoxTest();
