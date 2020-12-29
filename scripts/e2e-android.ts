import { exec } from 'shelljs';

import e2e from '../config/e2e';

const withSimulator = process.argv.includes('--withSimulator');

const openSimulator = () =>
  exec(`emulator -avd ${e2e.androidDeviceName} -no-snapshot -memory 2048 -no-boot-anim`, {
    async: true,
  });
const detoxBuild = () => exec('detox build --configuration android.emu.debug');
const detoxTest = () => exec('detox test --configuration android.emu.debug');

if (withSimulator) {
  openSimulator();
}

detoxBuild();
detoxTest();
