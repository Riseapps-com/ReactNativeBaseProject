import { Navigation } from 'react-native-navigation';

import { MENU_SCREEN_NAME } from '~modules/countries';

export const setRoot = async (): Promise<string> =>
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: MENU_SCREEN_NAME,
            },
          },
        ],
      },
    },
  });
