import { Platform } from 'react-native';

import { ELEVATION, SHADOW_HEIGHT, SHADOW_OPACITY, SHADOW_RADIUS } from '~modules/ui';
import { sizes, styleSheetFactory } from '~theme';

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
  },

  contentContainer: {
    ...Platform.select({ android: { elevation: ELEVATION } }),
    borderRadius: sizes.SPACING_S,
    overflow: 'hidden',
  },
}));
