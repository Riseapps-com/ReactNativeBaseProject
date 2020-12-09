import { styleSheetFactory } from '~theme';

export default styleSheetFactory(theme => ({
  container: {
    flexGrow: 1,
    backgroundColor: theme.background,
  },
}));
