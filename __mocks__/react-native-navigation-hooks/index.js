const setRoot = jest.fn();
const setStackRoot = jest.fn();
const push = jest.fn();
const showModal = jest.fn();
const showOverlay = jest.fn();
const mergeOptions = jest.fn(options => options);
const updateProps = jest.fn(props => props);
const dismissModal = jest.fn();
const pop = jest.fn();
const popTo = jest.fn();
const popToRoot = jest.fn();
const dismissOverlay = jest.fn();
const setDefaultOptions = jest.fn(options => options);
const dismissAllModals = jest.fn();
const getLaunchArgs = jest.fn();

module.exports = {
  ...jest.requireActual('react-native-navigation-hooks'),

  useNavigation: () => ({
    setRoot,
    setStackRoot,
    push,
    showModal,
    showOverlay,
    mergeOptions,
    updateProps,
    dismissModal,
    pop,
    popTo,
    popToRoot,
    dismissOverlay,
    setDefaultOptions,
    dismissAllModals,
    getLaunchArgs,
  }),
};
