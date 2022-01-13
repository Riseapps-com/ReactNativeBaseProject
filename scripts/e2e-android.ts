import { ChildProcess } from 'child_process';
import { exec, ShellString } from 'shelljs';

const startReactNative = (): ChildProcess => exec('react-native start', { async: true });
const detoxBuild = (): ShellString => exec('detox build --configuration android.emu.debug');
const detoxTest = (): ShellString => exec('detox test --configuration android.emu.debug');

startReactNative();
detoxBuild();
detoxTest();
