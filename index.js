import 'react-native-gesture-handler';
import '~modules/localization/services/I18n';

import { AppRegistry, LogBox } from 'react-native';

import { App } from '~modules/main';

import { name as appName } from './app.json';

LogBox.ignoreLogs(['[react-native-gesture-handler]', 'RCTBridge required dispatch_sync']);

AppRegistry.registerComponent(appName, () => App);
