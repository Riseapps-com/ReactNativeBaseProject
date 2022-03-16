import { exec } from 'shelljs';

import type { ChildProcess } from 'child_process';
import type { ShellString } from 'shelljs';

const startReactNative = (): ChildProcess => exec('react-native start', { async: true });
const detoxBuild = (): ShellString => exec('detox build --configuration android');
const detoxTest = (): ShellString => exec('detox test --configuration android');

startReactNative();
detoxBuild();
detoxTest();
