import { Platform } from 'react-native';

import { ELEVATION, SHADOW_HEIGHT, SHADOW_OPACITY, SHADOW_RADIUS } from '~modules/ui';
import { sizes, styleSheetFactory } from '~theme';

const FLAG_HEIGHT = 200;

export default styleSheetFactory(theme => ({
  cardContainer: {
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
    margin: sizes.SPACING_M,
  },
  contentContainer: {
    ...Platform.select({ android: { elevation: ELEVATION } }),
    borderRadius: sizes.SPACING_S,
    backgroundColor: theme.surface,
    overflow: 'hidden',
  },
  flagContainer: {
    width: '100%',
    height: FLAG_HEIGHT,
    justifyContent: 'flex-end',
    marginBottom: sizes.SPACING_S,
  },
  name: {
    color: theme.secondaryText,
    marginHorizontal: sizes.SPACING_M,
    marginBottom: sizes.SPACING_S,
  },
  rowContainer: {
    marginVertical: sizes.SPACING_S,
    marginHorizontal: sizes.SPACING_M,
    flexDirection: 'row',
  },
  title: {
    flex: 1,
  },
  value: {
    flex: 1,
    color: theme.disabled,
    marginStart: sizes.SPACING_S,
  },
}));
