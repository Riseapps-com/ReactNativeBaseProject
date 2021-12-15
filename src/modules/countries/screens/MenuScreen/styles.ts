import { styleSheetFactory } from '~theme';

export default styleSheetFactory(theme => ({
  menuScreen: {
    flex: 1,
    backgroundColor: theme.background,
  },
}));
