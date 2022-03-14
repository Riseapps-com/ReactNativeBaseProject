import { Appearance } from 'react-native';
import { configureFonts, DefaultTheme } from 'react-native-paper';
import { Fonts } from 'react-native-paper/lib/typescript/types';

import { getFont } from '~assets';

import { dark, light } from './config';
import { Theme } from './types';

const defaultFonts: Fonts = {
  regular: { fontFamily: getFont('regular') },
  medium: { fontFamily: getFont('medium') },
  light: { fontFamily: getFont('light') },
  thin: { fontFamily: getFont('thin') },
};

const isDark = Appearance.getColorScheme() === 'dark';
const theme: Theme = isDark ? dark : light;

const paperTheme = {
  ...DefaultTheme,
  fonts: configureFonts({
    default: defaultFonts,
    ios: defaultFonts,
    android: defaultFonts,
  }),
  dark: isDark,
  roundness: 0,
  animation: {
    scale: 1.0,
  },
  colors: {
    ...DefaultTheme.colors,
    primary: theme.primary,
    accent: theme.accent,
    background: theme.background,
    error: theme.error,
    text: theme.text,
    onBackground: theme.background,
    onSurface: theme.surface,
    disabled: theme.disabled,
    placeholder: theme.placeholder,
    backdrop: theme.backdrop,
    notification: theme.notification,
  },
};

export default paperTheme;
