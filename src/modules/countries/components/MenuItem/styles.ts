import { sizes, styleSheetFactory } from '~theme';

export default styleSheetFactory(theme => ({
  container: {
    marginHorizontal: sizes.SPACING_S,
    marginVertical: sizes.SPACING_S,
    padding: sizes.SPACING_S,
    flex: 1,
  },

  contentContainer: {
    flexDirection: 'row',
    backgroundColor: theme.primary,
    flex: 1,
  },

  imageContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: sizes.SPACING_S,
  },

  image: {
    width: 48,
    height: 48,
  },

  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingStart: sizes.SPACING_S,
    paddingEnd: sizes.SPACING_M,
  },

  title: {
    color: theme.secondaryText,
  },
}));
