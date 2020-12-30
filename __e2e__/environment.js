const {
  DetoxCircusEnvironment,
  SpecReporter,
  WorkerAssignReporter,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('detox/runners/jest-circus');

class CustomDetoxEnvironment extends DetoxCircusEnvironment {
  constructor(config) {
    super(config);

    this.registerListeners({
      SpecReporter,
      WorkerAssignReporter,
    });
  }
}

module.exports = CustomDetoxEnvironment;
