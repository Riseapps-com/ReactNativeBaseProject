import jestFetchMock from 'jest-fetch-mock';

const IGNORED_WARNINGS = [
  /Animated: `useNativeDriver` is not supported/,
  /Deprecation warning: value provided is not in a recognized RFC2822/,
];

// Errors that are safe to ignore, taken from:
// eslint-disable-next-line max-len
// https://medium.com/@jofarnold/testing-lifecycle-methods-with-react-native-enzymes-mount-and-jsdom-dacae7ee7b51

const IGNORED_ERRORS = [
  /Use PascalCase for React components/,
  /React does not recognize the `.+?` prop on a DOM element/,
  /Received `.+?` for a non-boolean attribute `.+?`/,
  /Warning: Can't perform a React state update on an unmounted/,
  /The above error occurred in the <ComponentWithError> component/,
];

const realConsoleWarn = global.console.warn;
const realConsoleError = global.console.error;

jest.spyOn(global.console, 'warn').mockImplementation((message, ...args) => {
  if (IGNORED_WARNINGS.find(warning => warning.test(message))) return jest.fn();

  return realConsoleWarn(message, ...args);
});

jest.spyOn(global.console, 'error').mockImplementation((message, ...args) => {
  if (IGNORED_ERRORS.find(error => error.test(message))) return jest.fn();

  return realConsoleError(message, ...args);
});

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jestFetchMock.enableMocks();
