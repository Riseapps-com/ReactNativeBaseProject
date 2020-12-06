import { sizes, styleSheetFactory } from '~theme';

const SHADOW_HEIGHT = 2;
const SHADOW_OPACITY = 0.25;
const SHADOW_RADIUS = 3.84;
const ELEVATION = 5;
const FLAG_HEIGHT = 200;

export default styleSheetFactory(theme => ({
  cardContainer: {
    shadowColor: theme.backdrop,
    shadowOffset: {
      width: 0,
      height: SHADOW_HEIGHT,
    },
    shadowOpacity: SHADOW_OPACITY,
    shadowRadius: SHADOW_RADIUS,
    elevation: ELEVATION,
    margin: sizes.SPACING_M,
  },
  contentContainer: {
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
