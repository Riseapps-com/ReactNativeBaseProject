import { sizes, styleSheetFactory } from '~theme';

export default styleSheetFactory(theme => ({
  errorScreen: {
    flex: 1,
    backgroundColor: theme.background,
    padding: sizes.SPACING_M,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: theme.error,
    textAlign: 'center',
    marginBottom: sizes.SPACING_L,
  },
}));
