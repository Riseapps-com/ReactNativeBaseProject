import { styleSheetFactory } from '~theme';

export default styleSheetFactory(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },

  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
