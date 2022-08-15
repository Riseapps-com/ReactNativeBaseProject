import { log, logAndCapture, logError } from './logger';

import type { SentryMessageDetails } from '../types';
import type AppError from '~modules/errors/AppError';

export const logger = (category: string) => (message: string, details?: any) => log(category, message, details);

export const errorLogger = (category: string) => (error: AppError) => logError(category, error);

export const captureLogger = (category: string) => (message: string, details?: SentryMessageDetails) =>
  logAndCapture(category, message, details);
