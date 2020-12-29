import { exec } from 'shelljs';

const startReactNative = () => exec('react-native start', { async: true });
const detoxBuild = () => exec('detox build --configuration android.emu.debug');
const detoxTest = () => exec('detox test --configuration android.emu.debug');

startReactNative();
detoxBuild();
detoxTest();
