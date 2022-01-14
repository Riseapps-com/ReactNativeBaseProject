import { sizes, styleSheetFactory } from '~theme';

const FLAG_HEIGHT = 200;

export default styleSheetFactory(theme => ({
  container: { flexGrow: 1 },

  cardContainer: { margin: sizes.SPACING_M },

  contentContainer: { backgroundColor: theme.surface },

  flagContainer: {
    width: '100%',
    height: FLAG_HEIGHT,
    justifyContent: 'flex-end',
    marginBottom: sizes.SPACING_S,
  },

  name: {
    color: theme.secondaryText,
    marginHorizontal: sizes.SPACING_M,
    marginBottom: sizes.SPACING_S,
  },

  rowContainer: {
    marginVertical: sizes.SPACING_S,
    marginHorizontal: sizes.SPACING_M,
    flexDirection: 'row',
  },

  title: { flex: 1 },

  value: {
    flex: 1,
    color: theme.disabled,
    marginStart: sizes.SPACING_S,
  },
}));
