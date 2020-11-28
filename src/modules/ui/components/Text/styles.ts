import { StyleSheet } from 'react-native';

import { getFont } from '~assets/fonts';
import { colors, sizes } from '~theme';

export default StyleSheet.create({
  text: {
    color: colors.TEXT,
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
});
