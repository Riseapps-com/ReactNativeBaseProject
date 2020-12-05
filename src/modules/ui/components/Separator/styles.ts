import { styleSheetFactory } from '~theme';

export default styleSheetFactory(theme => ({
  container: {
    width: '100%',
    height: 1,
    backgroundColor: theme.secondaryText,
  },
}));
