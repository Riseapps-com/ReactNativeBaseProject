import { getFont } from '~assets';
import { sizes, styleSheetFactory } from '~theme';

export default styleSheetFactory(theme => ({
  text: {
    color: theme.text,
  },

  light: {
    fontFamily: getFont('quicksand-light'),
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
    fontSize: sizes.BIGGER_FONT_SIZE,
  },
  biggest: {
    fontSize: sizes.BIGGEST_FONT_SIZE,
  },
}));
