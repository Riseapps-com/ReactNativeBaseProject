module.exports = {
  useNavigation: () => ({
    setRoot: jest.fn(),
    setStackRoot: jest.fn(),
    push: jest.fn(),
    showModal: jest.fn(),
    showOverlay: jest.fn(),
    mergeOptions: jest.fn(options => options),
    updateProps: jest.fn(props => props),
    dismissModal: jest.fn(),
    pop: jest.fn(),
    popTo: jest.fn(),
    popToRoot: jest.fn(),
    dismissOverlay: jest.fn(),
    setDefaultOptions: jest.fn(options => options),
    dismissAllModals: jest.fn(),
    getLaunchArgs: jest.fn(),
  }),
};
