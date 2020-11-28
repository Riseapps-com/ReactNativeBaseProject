import '~modules/localization/services/I18n';

import { Navigation } from 'react-native-navigation';

import { registerScreens, setDefaultOptions, setRoot } from '~modules/navigation';

Navigation.events().registerAppLaunchedListener(async () => {
  registerScreens();
  setDefaultOptions();
  await setRoot();
});
