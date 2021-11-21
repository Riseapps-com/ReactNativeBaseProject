import { styleSheetFactory } from '~theme';

export default styleSheetFactory(theme => ({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  error: {
    color: theme.error,
  },
}));
