module.exports = {
  preset: 'react-native',
  cacheDirectory: '.jest/cache',
  collectCoverage: true,
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.after.setup.js', '<rootDir>/jest.extend.js'],
  clearMocks: true,
  timers: 'legacy',
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
};
