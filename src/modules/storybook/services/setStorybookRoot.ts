import { configure } from '@storybook/react-native';
import { Navigation } from 'react-native-navigation';

import { STORYBOOK_SCREEN_NAME } from '~modules/storybook';

import { loadStories } from '../generated/storyLoader';

configure(() => {
  loadStories();
}, module);

const setStorybookRoot = async (): Promise<string> =>
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: STORYBOOK_SCREEN_NAME,
            },
          },
        ],
      },
    },
  });

export default setStorybookRoot;
