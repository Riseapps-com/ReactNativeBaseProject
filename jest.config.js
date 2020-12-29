module.exports = {
  preset: 'react-native',
  cacheDirectory: '.jest/cache',
  collectCoverage: true,
  transformIgnorePatterns: ['node_modules/(?!(react-native|ReactNativeBaseProject)/)'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.after.setup.js', '<rootDir>/jest.extend.js'],
  clearMocks: true,
};
