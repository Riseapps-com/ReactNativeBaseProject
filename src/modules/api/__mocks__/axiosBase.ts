module.exports = {
  ...jest.requireActual('../axiosBase'),

  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
};
