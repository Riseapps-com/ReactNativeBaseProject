import { sizes, styleSheetFactory } from '~theme';

export default styleSheetFactory(() => ({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },

  menuItem: {
    marginVertical: sizes.SPACING_M,
  },
}));
