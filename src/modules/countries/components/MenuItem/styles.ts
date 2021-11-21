import { Platform } from 'react-native';

import { ELEVATION, SHADOW_HEIGHT, SHADOW_OPACITY, SHADOW_RADIUS } from '~modules/ui';
import { sizes, styleSheetFactory } from '~theme';

const MENU_IMAGE_WIDTH = 48;

export default styleSheetFactory(theme => ({
  container: {
    ...Platform.select({
      ios: {
        shadowColor: theme.backdrop,
        shadowOffset: {
          width: 0,
          height: SHADOW_HEIGHT,
        },
        shadowOpacity: SHADOW_OPACITY,
        shadowRadius: SHADOW_RADIUS,
      },
    }),
    marginHorizontal: sizes.SPACING_S,
    marginVertical: sizes.SPACING_S,
    padding: sizes.SPACING_S,
    flex: 1,
  },

  contentContainer: {
    ...Platform.select({ android: { elevation: ELEVATION } }),
    overflow: 'hidden',
    borderRadius: sizes.SPACING_S,
    flexDirection: 'row',
    backgroundColor: theme.primary,
    flex: 1,
  },

  imageContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: sizes.SPACING_S,
  },

  image: {
    width: MENU_IMAGE_WIDTH,
    height: MENU_IMAGE_WIDTH,
  },

  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingStart: sizes.SPACING_S,
    paddingEnd: sizes.SPACING_M,
  },

  title: {
    color: theme.secondaryText,
  },
}));
