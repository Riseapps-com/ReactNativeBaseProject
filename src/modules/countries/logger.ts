import { loggerFactory } from '~modules/logger';

const LOG_CATEGORY = 'COUNTRIES';

export const log = loggerFactory.logger(LOG_CATEGORY);
export const logError = loggerFactory.errorLogger(LOG_CATEGORY);
