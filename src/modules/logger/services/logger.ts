import AppError from '~modules/errors/AppError';

import { JSON_SPACE } from '../config';

const doLog = (category: string, message: string, details?: any) => {
  // eslint-disable-next-line no-console
  console.log(`[${category}]`, message);
  // eslint-disable-next-line no-console
  if (details) console.log(JSON.stringify(details, undefined, JSON_SPACE));
};

export const log = (category: string, message: string, details?: any) => {
  if (__DEV__) {
    doLog(category, message, details);
  }
};

const removeOriginalStack = (error: AppError) => {
  if (error.originalError instanceof Error) {
    if (error.originalError.stack) {
      return {
        ...error,
        originalError: {
          name: error.originalError.name,
          message: error.originalError.message,
        },
      };
    }
  }

  return undefined;
};

const logAppError = (category: string, error: AppError) => {
  const errorMinusOriginalStack = removeOriginalStack(error);

  if (errorMinusOriginalStack) {
    doLog(
      category,
      `AppError received:\n${JSON.stringify(errorMinusOriginalStack, null, JSON_SPACE)}\n`
    );

    const originalError = error.originalError as Error;

    doLog(category, `Original Error's Stack:\n  ${originalError.stack?.replace(/\n/g, '\n  ')}\n`);
  } else {
    doLog(
      category,
      `AppError received:\n${JSON.stringify(error, Object.getOwnPropertyNames(error))}\n`
    );
  }

  if (error.stack) {
    doLog(category, `AppError's Stack:\n  ${error.stack.replace(/\n/g, '\n  ')}\n`);
  }
};

const logErrorObject = (category: string, error: Error) => {
  // If a stack is present that will contain the message so just log that
  if (error.stack) {
    doLog(category, error.stack);
  } else if (error.message) {
    // Otherwise there should be a message so log that
    const errorName = error.name || 'Error';

    doLog(category, `${errorName} received: ${error.message}`);
  } else {
    // Otherwise fallback to generically log the error in a way that Error objects support
    // (See: https://stackoverflow.com/a/26199752/1161972)
    const errorName = error.name || 'Error';

    doLog(
      category,
      `${errorName} received:\n${JSON.stringify(
        error,
        Object.getOwnPropertyNames(error),
        JSON_SPACE
      )}`
    );
  }
};

export const logError = (category: string, error: Error) => {
  if (__DEV__) {
    if (error instanceof AppError) {
      logAppError(category, error as AppError);
    } else {
      logErrorObject(category, error);
    }
  }

  // sent event to analytics
  // sent log to error logging service
};
