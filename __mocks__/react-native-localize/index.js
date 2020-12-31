const getLocales = () => [
  { countryCode: 'US', languageTag: 'en-US', languageCode: 'en', isRTL: false },
];

const findBestAvailableLanguage = () => ({
  languageTag: 'en-US',
  isRTL: false,
});

const getNumberFormatSettings = () => ({
  decimalSeparator: '.',
  groupingSeparator: ',',
});

const getCalendar = () => 'gregorian';
const getCountry = () => 'UA';
const getCurrencies = () => ['UAH', 'USD', 'EUR'];
const getTemperatureUnit = () => 'celsius';
const getTimeZone = () => 'Europe/Kiev';
const uses24HourClock = () => true;
const usesMetricSystem = () => true;

const addEventListener = jest.fn();
const removeEventListener = jest.fn();

export {
  addEventListener,
  findBestAvailableLanguage,
  getCalendar,
  getCountry,
  getCurrencies,
  getLocales,
  getNumberFormatSettings,
  getTemperatureUnit,
  getTimeZone,
  removeEventListener,
  uses24HourClock,
  usesMetricSystem,
};
