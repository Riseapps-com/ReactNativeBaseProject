import { sizes, styleSheetFactory } from '~theme';

export default styleSheetFactory(() => ({
  container: {
    flex: 1,

    marginVertical: sizes.SPACING_S,
  },
}));
