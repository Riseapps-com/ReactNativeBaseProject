import { styleSheetFactory } from '~theme';

export default styleSheetFactory(theme => ({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.background,
  },
}));
