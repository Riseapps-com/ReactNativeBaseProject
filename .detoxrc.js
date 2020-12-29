const e2e = require('./config/e2e');

module.exports = {
  testRunner: 'jest',
  runnerConfig: './__e2e__/config.json',
  configurations: {
    'ios.sim.debug': {
      binaryPath: `ios/build/Build/Products/Debug-iphonesimulator/${e2e.projectName}.app`,
      build: `xcodebuild -workspace ios/${e2e.projectName}.xcworkspace -scheme ${e2e.projectName} -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build`,
      type: 'ios.simulator',
      device: {
        type: e2e.iosDeviceType,
      },
    },
    'android.emu.debug': {
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build:
        'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd -',
      type: 'android.emulator',
      device: {
        avdName: e2e.androidDeviceName,
      },
    },
  },
  behavior: {
    init: {
      exposeGlobals: false,
    },
  },
};
