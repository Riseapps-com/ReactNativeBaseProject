import { Appearance } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { getFont } from '~assets/fonts';
import { dark, light, sizes } from '~theme';

export const setDefaultOptions = (): void => {
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
      hideOnScroll: true,
      title: {
        fontSize: sizes.BASE_FONT_SIZE,
        color: theme.secondaryText,
        fontFamily: getFont('quicksand-bold'),
      },
      backButton: {
        color: theme.secondaryText,
      },
      background: {
        color: theme.primary,
      },
    },
  });
};
