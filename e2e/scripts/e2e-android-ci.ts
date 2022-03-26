import { scriptsUtils } from '../services';

const runProgram = (): void => {
  scriptsUtils.buildApp('android');
  scriptsUtils.runDetox('android');
};

runProgram();
