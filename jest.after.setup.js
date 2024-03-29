// StatusBar needs real timers so it's better to mock it out, however we cannot mock out
// react-native in the same way as rest ouf our modules, using the __mocks__ directory so we just
// generate default mock for `StatusBar` component
jest.mock('react-native/Libraries/Components/StatusBar/StatusBar', () =>
  jest.createMockFromModule('react-native/Libraries/Components/StatusBar/StatusBar')
);
