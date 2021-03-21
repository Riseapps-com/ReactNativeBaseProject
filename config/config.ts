const testIDs = {
  menu: {
    allCountries: 'allCountries',
    countriesByRegion: 'countriesByRegion',
  },
  selectRegion: {
    back: 'back',
    africa: 'africa',
    americas: 'americas',
    asia: 'asia',
    europe: 'europe',
    oceania: 'oceania',
  },
  countries: {
    back: 'back',
    country: 'country',
    scrollContainer: 'scrollContainer',
  },
  countryDetails: {
    back: 'back',
    scrollContainer: 'scrollContainer',
  },
  global: {
    activityIndicator: 'activityIndicator',
    error: 'error',
  },
};

Object.keys(testIDs).forEach(key => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Object.keys(testIDs[key]).forEach(innerKey => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    testIDs[key][innerKey] = `${key}_${testIDs[key][innerKey]}`;
  });
});

export { testIDs };
