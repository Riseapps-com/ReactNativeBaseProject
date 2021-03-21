import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import '~modules/localization/services/I18n';

import { AppRegistry } from 'react-native';

import { App } from '~modules/main';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
