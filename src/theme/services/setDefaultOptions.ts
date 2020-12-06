import { Appearance } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { getFont } from '~assets';

import { dark, light } from '../config';
import * as sizes from '../sizes';

const setDefaultOptions = (): void => {
  const theme = Appearance.getColorScheme() === 'dark' ? dark : light;

  Navigation.setDefaultOptions({
    layout: {
      backgroundColor: theme.background,
      componentBackgroundColor: theme.background,
      orientation: ['portrait'],
    },
    topBar: {
      drawBehind: false,
      animate: true,
      title: {
        fontSize: sizes.BASE_FONT_SIZE,
        color: theme.secondaryText,
        fontFamily: getFont('quicksand-bold'),
      },
      backButton: {
        color: theme.secondaryText,
        fontFamily: getFont('quicksand-bold'),
      },
      background: {
        color: theme.primary,
      },
    },
    animations: {
      setStackRoot: {
        waitForRender: true,
      },
      setRoot: {
        waitForRender: true,
      },
      push: {
        waitForRender: true,
      },
      pop: {
        waitForRender: true,
      },
      showModal: {
        waitForRender: true,
      },
      dismissModal: {
        waitForRender: true,
      },
    },
  });
};

export default setDefaultOptions;
