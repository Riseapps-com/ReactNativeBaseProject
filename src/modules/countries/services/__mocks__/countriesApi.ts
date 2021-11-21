module.exports = {
  ...jest.requireActual('../countriesApi'),

  getAllCountries: jest.fn(),
  getCountriesByRegion: jest.fn(),
  getCountryDetails: jest.fn(),
};
