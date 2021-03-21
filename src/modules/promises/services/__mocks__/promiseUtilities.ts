module.exports = {
  ...jest.requireActual('../promiseUtilities'),

  retry: jest.fn(async (fn, options) => {
    return options && options.params ? fn(...options.params) : fn();
  }),
};
