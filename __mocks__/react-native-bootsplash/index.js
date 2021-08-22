module.exports = {
  hide: jest.fn(),
  show: jest.fn(),
  getVisibilityStatus: jest.fn(() => Promise.resolve('hidden')),
};
