import '~modules/localization/services/I18n';
import 'react-native-get-random-values';

import { AppRegistry } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { registerScreens, setRoot } from '~modules/navigation';
import { USE_STORYBOOK } from '~modules/storybook';
import { setStorybookRoot } from '~modules/storybook/services';
import { setDefaultOptions } from '~theme';

Navigation.events().registerAppLaunchedListener(async () => {
  registerScreens();
  setDefaultOptions();
  if (USE_STORYBOOK) {
    await setStorybookRoot();
  } else {
    await setRoot();
  }
});

// to prevent an error from react-native-navigation
AppRegistry.registerComponent('ReactNativeBaseProject', () => () => null);
