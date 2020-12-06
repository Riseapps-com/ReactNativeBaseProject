import AppError from '~modules/errors/AppError';

import { log, logError } from './logger';

export const logger = (category: string) => (message: string, details?: any) =>
  log(category, message, details);

export const errorLogger = (category: string) => (error: AppError) => logError(category, error);
