const config = require("./e2e/config.json");

module.exports = {
  testRunner: 'jest',
  runnerConfig: './e2e/.jestrc.json',
  apps: {
    ios: {
      type: 'ios.app',
      binaryPath: config.ios.binaryPath,
      build: config.ios.build,
    },
    android: {
      type: 'android.apk',
      binaryPath: config.android.binaryPath,
      build: config.android.build,
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: config.ios.device.type,
      },
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: config.android.device.avdName,
      },
    },
  },
  configurations: {
    ios: {
      device: 'simulator',
      app: 'ios',
    },
    android: {
      device: 'emulator',
      app: 'android',
    },
  },
  behaviour: {
    init: {
      "exposeGlobals": false,
    },
  }
};
