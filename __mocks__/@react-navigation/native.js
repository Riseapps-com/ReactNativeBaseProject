const navigate = jest.fn((to, params) => ({ to, params }));
const reset = jest.fn(params => params);
const goBack = jest.fn();
const addListener = jest.fn();
const removeListener = jest.fn();
const dispatch = jest.fn();

module.exports = {
  ...jest.requireActual('@react-navigation/native'),

  useNavigation: () => ({
    navigate,
    reset,
    goBack,
    addListener,
    removeListener,
    dispatch,
  }),
  useRoute: jest.fn(),
};
