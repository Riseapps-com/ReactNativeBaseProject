import { sizes, styleSheetFactory } from '~theme';

const MENU_IMAGE_HEIGHT = 48;

export default styleSheetFactory(theme => ({
  container: {
    borderRadius: sizes.SPACING_S,
    overflow: 'hidden',
    backgroundColor: theme.primary,
    flexDirection: 'row',
    marginHorizontal: sizes.SPACING_S,
    marginVertical: sizes.SPACING_S,
    padding: sizes.SPACING_S,
    flex: 1,
  },
  imageContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: sizes.SPACING_S,
  },
  image: {
    width: MENU_IMAGE_HEIGHT,
    height: MENU_IMAGE_HEIGHT,
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
