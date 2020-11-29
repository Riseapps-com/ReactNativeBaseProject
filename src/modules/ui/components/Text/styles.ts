import { getFont } from '~assets/fonts';
import { sizes, styleSheetFactory } from '~theme';

export default styleSheetFactory(theme => ({
  text: {
    color: theme.text,
  },

  regular: {
    fontFamily: getFont('quicksand-regular'),
  },
  bold: {
    fontFamily: getFont('quicksand-bold'),
  },

  smallest: {
    fontSize: sizes.SMALLEST_FONT_SIZE,
  },
  smaller: {
    fontSize: sizes.SMALLER_FONT_SIZE,
  },
  normal: {
    fontSize: sizes.BASE_FONT_SIZE,
  },
  bigger: {
    fontSize: sizes.BASE_FONT_SIZE,
  },
  biggest: {
    fontSize: sizes.BASE_FONT_SIZE,
  },
}));
