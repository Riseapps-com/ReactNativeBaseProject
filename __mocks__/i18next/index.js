module.exports = {
  use: () => ({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    init: () => {},
  }),

  t: (translation, options) => {
    if (translation === 'untranslatedException') return options?.defaultValue;

    return translation;
  },
};
