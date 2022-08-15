module.exports = {
  preset: 'react-native',
  cacheDirectory: '.jest/cache',
  collectCoverage: true,
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.after.setup.js', '<rootDir>/jest.extend.js'],
  clearMocks: true,
  fakeTimers: {
    enableGlobally: true,
    legacyFakeTimers: true,
  },
  transformIgnorePatterns: ['node_modules/(?!@sentry|@react-native|react-native)'],
};
