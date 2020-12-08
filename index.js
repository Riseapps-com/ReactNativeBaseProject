import '~modules/localization/services/I18n';
import 'react-native-get-random-values';

import { AppRegistry } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { registerScreens, setRoot } from '~modules/navigation';
import { setDefaultOptions } from '~theme';

Navigation.events().registerAppLaunchedListener(async () => {
  registerScreens();
  setDefaultOptions();
  await setRoot();
});

// to prevent an error from react-native-navigation
AppRegistry.registerComponent('ReactNativeBaseProject', () => () => null);
