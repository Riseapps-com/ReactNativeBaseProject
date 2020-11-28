import { Navigation } from 'react-native-navigation';

import { getFont } from '~assets/fonts';
import { colors, sizes } from '~theme';

export const setDefaultOptions = (): void =>
  Navigation.setDefaultOptions({
    layout: {
      backgroundColor: colors.WHITE,
      componentBackgroundColor: colors.WHITE,
      orientation: ['portrait'],
    },
    topBar: {
      drawBehind: false,
      animate: true,
      hideOnScroll: true,
      title: {
        fontSize: sizes.BASE_FONT_SIZE,
        color: colors.WHITE,
        fontFamily: getFont('quicksand-bold'),
      },
      backButton: {
        color: colors.WHITE,
      },
      background: {
        color: colors.PRIMARY,
      },
    },
  });
