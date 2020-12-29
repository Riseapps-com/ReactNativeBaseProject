import { exec } from 'shelljs';

const openSimulator = () =>
  exec('emulator -avd Pixel_3a_XL_API_30 -no-snapshot -memory 2048 -no-boot-anim');
const detoxBuild = () => exec('detox build --configuration ios.sim.debug');
const detoxTest = () => exec('detox test --configuration ios.sim.debug');

openSimulator();
detoxBuild();
detoxTest();
