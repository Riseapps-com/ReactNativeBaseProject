import { colors, sizes, styleSheetFactory } from '~theme';

export default styleSheetFactory(theme => ({
  button: {
    borderRadius: sizes.SPACING_S,
  },

  buttonContent: {
    height: sizes.SPACING_XXL + sizes.SPACING_S,
  },

  disabled: {
    backgroundColor: theme.disabled,
  },

  primary: {
    backgroundColor: theme.primary,
  },

  secondary: {
    backgroundColor: theme.accent,
  },

  textPrimary: {
    color: theme.secondaryText,
  },

  textSecondary: {
    color: theme.secondaryText,
  },

  textButton: {
    borderRadius: 0,
    backgroundColor: colors.TRANSPARENT,
  },
}));
