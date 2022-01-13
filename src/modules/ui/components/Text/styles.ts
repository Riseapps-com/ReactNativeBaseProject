import { getFont } from '~assets';
import { sizes, styleSheetFactory } from '~theme';

export default styleSheetFactory(theme => ({
  text: {
    color: theme.text,
  },

  black: {
    fontFamily: getFont('black'),
  },

  heavy: {
    fontFamily: getFont('heavy'),
  },

  light: {
    fontFamily: getFont('light'),
  },

  medium: {
    fontFamily: getFont('medium'),
  },

  regular: {
    fontFamily: getFont('regular'),
  },

  semiBold: {
    fontFamily: getFont('semiBold'),
  },

  thin: {
    fontFamily: getFont('thin'),
  },

  ultraLight: {
    fontFamily: getFont('ultraLight'),
  },

  bold: {
    fontFamily: getFont('bold'),
  },

  xs: {
    fontSize: sizes.FONT_SIZE_XS,
  },

  s: {
    fontSize: sizes.FONT_SIZE_S,
  },

  m: {
    fontSize: sizes.FONT_SIZE_M,
  },

  l: {
    fontSize: sizes.FONT_SIZE_L,
  },

  xl: {
    fontSize: sizes.FONT_SIZE_XL,
  },
}));
