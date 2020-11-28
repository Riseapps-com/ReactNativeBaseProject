import * as colors from './colors';
import { ColorsScheme } from './types';

export const darkScheme: ColorsScheme = {
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
    topBarBackground: colors.CAPE_COD,
    topBarTitle: '',
  },
  ui: { components: { activityIndicator: { defaultColor: '' }, text: { defaultColor: '' } } },
};
