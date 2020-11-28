export type ColorsScheme = {
  navigation: {
    background: string;
    topBarBackground: string;
    topBarTitle: string;
    topBarBackButton: string;
  };
  ui: {
    components: {
      activityIndicator: {
        defaultColor: string;
      };
      text: {
        defaultColor: string;
      };
    };
  };
  countries: {
    components: {
      menuItem: {
        background: string;
        title: string;
        separator: string;
      };
      countriesList: {
        background: string;
      };
      countriesListCell: {
        background: string;
        title: string;
        subtitle: string;
      };
    };
    screens: {
      countries: {
        topBarBackground: string;
        topBarTitle: string;
        topBarBackButton: string;
      };
      countryDetails: {
        topBarBackground: string;
        topBarTitle: string;
        topBarBackButton: string;
      };
    };
  };
};
