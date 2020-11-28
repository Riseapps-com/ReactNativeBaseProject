import { Appearance } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { getFont } from '~assets/fonts';
import { ColorsScheme, darkScheme, lightScheme, sizes } from '~theme';

export const setDefaultOptions = (): void => {
  const colors: ColorsScheme = Appearance.getColorScheme() === 'dark' ? darkScheme : lightScheme;

  Navigation.setDefaultOptions({
    layout: {
      backgroundColor: colors.navigation.background,
      componentBackgroundColor: colors.navigation.background,
      orientation: ['portrait'],
    },
    topBar: {
      drawBehind: false,
      animate: true,
      hideOnScroll: true,
      title: {
        fontSize: sizes.BASE_FONT_SIZE,
        color: colors.navigation.topBarTitle,
        fontFamily: getFont('quicksand-bold'),
      },
      backButton: {
        color: colors.navigation.topBarBackButton,
      },
      background: {
        color: colors.navigation.topBarBackground,
      },
    },
  });
};
