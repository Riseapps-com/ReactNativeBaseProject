import prompts from 'prompts';

import type { AndroidOptions, BaseOptions, IOSOptions } from '../types';

const getBaseOptions = async (): Promise<BaseOptions> => {
  const shouldRebuildApp = await prompts({
    type: 'confirm',
    name: 'value',
    message: 'Would you like to rebuild the application?',
    initial: false,
  });

  return { shouldRebuildApp: shouldRebuildApp.value };
};

export const getIOSOptions = async (): Promise<IOSOptions> => {
  const baseOptions = await getBaseOptions();

  const shouldOpenSimulator = await prompts({
    type: 'confirm',
    name: 'value',
    message: 'Would you like to open the simulator?',
    initial: true,
  });

  return { ...baseOptions, shouldOpenSimulator: shouldOpenSimulator.value };
};

export const getAndroidOptions = async (): Promise<AndroidOptions> => {
  const baseOptions = await getBaseOptions();

  return { ...baseOptions };
};
