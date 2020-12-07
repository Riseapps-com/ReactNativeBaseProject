import { styleSheetFactory } from '~theme';

export default styleSheetFactory(() => ({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  menuItem: {
    height: '40%',
  },
}));
