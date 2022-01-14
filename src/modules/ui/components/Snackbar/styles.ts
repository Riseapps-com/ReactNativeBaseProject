import { styleSheetFactory } from '~theme';

export default styleSheetFactory(theme => ({
  info: { backgroundColor: theme.accent },

  success: { backgroundColor: theme.primary },

  error: { backgroundColor: theme.error },

  message: { color: theme.secondaryText },
}));
