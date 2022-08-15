module.exports = {
  ...jest.requireActual('@sentry/react-native'),

  init: jest.fn(),
  captureMessage: jest.fn(),
  captureException: jest.fn(),
};
