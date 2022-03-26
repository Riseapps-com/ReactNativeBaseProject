import { exec } from 'shelljs';

import type { Platform } from '../types';

export const buildApp = (platform: Platform): void => {
  // Building the artifacts...
  exec(`detox build --configuration ${platform}`);
};

export const runDetox = (platform: Platform): void => {
  // If the platform is `android` then we need run start the react-native server in order not to have
  // any bundle errors.
  if (platform === 'android') {
    exec('react-native start', { async: true });
  }

  // Running e2e tests...
  exec(`detox test --configuration ${platform}`);
};
