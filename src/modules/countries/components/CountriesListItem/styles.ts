import { sizes, styleSheetFactory } from '~theme';

export default styleSheetFactory(theme => ({
  container: {
    flexDirection: 'row',
    paddingHorizontal: sizes.SPACING_M,
    paddingVertical: sizes.SPACING_S,
  },

  centerContainer: {
    flex: 1,
    marginStart: sizes.SPACING_M,
  },

  subtitle: {
    color: theme.disabled,
  },

  icon: {
    width: sizes.SPACING_XL,
  },
}));
