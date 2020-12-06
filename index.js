import '~modules/localization/services/I18n';
import 'react-native-get-random-values';

import { Navigation } from 'react-native-navigation';

import { registerScreens, setRoot } from '~modules/navigation';
import { setDefaultOptions } from '~theme';

Navigation.events().registerAppLaunchedListener(async () => {
  registerScreens();
  setDefaultOptions();
  await setRoot();
});
