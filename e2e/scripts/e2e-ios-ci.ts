import { scriptsUtils } from '../services';

const runProgram = (): void => {
  scriptsUtils.buildApp('ios');
  scriptsUtils.runDetox('ios');
};

runProgram();
