import * as colors from './colors';
import { ColorsScheme } from './types';

export const lightScheme: ColorsScheme = {
  countries: {
    components: {
      countriesList: { background: '' },
      countriesListCell: { background: '', subtitle: '', title: '' },
      menuItem: { background: '', separator: '', title: '' },
    },
    screens: {
      countries: { topBarBackButton: '', topBarBackground: '', topBarTitle: '' },
      countryDetails: { topBarBackButton: '', topBarBackground: '', topBarTitle: '' },
    },
  },
  navigation: {
    background: '',
    topBarBackButton: '',
    topBarBackground: colors.INTERNATIONAL_KLEIN_BLUE,
    topBarTitle: '',
  },
  ui: { components: { activityIndicator: { defaultColor: '' }, text: { defaultColor: '' } } },
};
