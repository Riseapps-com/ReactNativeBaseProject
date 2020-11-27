import { AppRegistry } from 'react-native';
import { Navigation } from 'react-native-navigation';

import Root from '~modules/main/components/Root';

import { name as appName } from './app.json';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => Root);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});

AppRegistry.registerComponent(appName, () => Root);
