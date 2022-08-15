import * as Sentry from '@sentry/react-native';
import dayjs from 'dayjs';

import { LOG_DATE_TIME_FORMAT } from '~modules/dateAndTime';
import AppError from '~modules/errors/AppError';

import type { SentryMessageDetails } from '../types';
import type * as SentryTypes from '@sentry/types';

const formatTimestamp = (): string => dayjs().format(LOG_DATE_TIME_FORMAT);

const formatLogMessage = (category: string, message: string, includeTimestamp = true): string => {
  const timestampPrefix = includeTimestamp ? `${formatTimestamp()} ` : '';

  return `${timestampPrefix}[${category}] ${message}`;
};

const doLog = (category: string, message: string, details?: any): void => {
  // eslint-disable-next-line no-console
  console.log(formatLogMessage(category, message));
  // eslint-disable-next-line no-console
  if (details) console.log(JSON.stringify(details, undefined, 2));
};

export const log = (category: string, message: string, details?: any): void => {
  // Log to the console unless we're running as part of a test-suite
  if (__DEV__ && process.env.NODE_ENV === 'test') {
    return;
  }

  doLog(category, message, details);
};

const removeOriginalStack = (error: AppError): AppError | undefined => {
  if (error.originalError instanceof Error) {
    if (error.originalError.stack) {
      return {
        ...error,
        originalError: {
          name: error.originalError.name,
          message: error.originalError.message,
        },
      } as AppError;
    }
  }

  return undefined;
};

const logAppError = (category: string, error: AppError): void => {
  const errorMinusOriginalStack = removeOriginalStack(error);

  if (errorMinusOriginalStack) {
    doLog(category, `AppError received:\n${JSON.stringify(errorMinusOriginalStack, null, 2)}\n`);

    const originalError = error.originalError as Error;

    doLog(category, `Original Error's Stack:\n  ${originalError.stack?.replace(/\n/g, '\n  ')}\n`);
  } else {
    doLog(category, `AppError received:\n${JSON.stringify(error, Object.getOwnPropertyNames(error))}\n`);
  }

  if (error.stack) {
    doLog(category, `AppError's Stack:\n  ${error.stack.replace(/\n/g, '\n  ')}\n`);
  }
};

const logErrorObject = (category: string, error: Error): void => {
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

    doLog(category, `${errorName} received:\n${JSON.stringify(error, Object.getOwnPropertyNames(error), 2)}`);
  }
};

const logErrorToConsole = (category: string, error: Error | string | unknown): void => {
  if (typeof error === 'string') {
    doLog(category, `Error string received: ${error}`);
  } else if (error instanceof AppError) {
    logAppError(category, error as AppError);
  } else if (error instanceof Error) {
    logErrorObject(category, error);
  } else {
    doLog(category, `Error received:\n${JSON.stringify(error, null, 2)}`);
  }
};

const sendErrorToSentry = (error: Error | string | unknown): void => {
  if (typeof error === 'string') {
    Sentry.captureMessage(error);
  } else {
    Sentry.captureException(error);

    // For AppErrors, the original error is wrapped but Sentry doesn't show it, so also capture that directly
    // eslint-disable-next-line no-lonely-if
    if (error instanceof AppError && error.originalError) {
      // Sentry.captureException(error.originalError);
    }
  }
};

const isSentryContexts = (details: SentryMessageDetails): details is SentryTypes.Contexts => {
  if (typeof details !== 'object') {
    return false;
  }

  // If every key in the details object contains a nested object, then treat the details object as a Contexts object
  return [...Object.values(details)].every(value => typeof value === 'object');
};

const sendLogToSentry = (category: string, message: string, details?: SentryMessageDetails): void => {
  const formattedLogMessage = formatLogMessage(category, message, false);

  Sentry.captureMessage(formattedLogMessage, scope => {
    // Standard context fields for all messages logged
    scope.setContext('Message Context', {
      timestamp: formatTimestamp(),
    });

    // Optional additional context values - either a map of separate contexts, or a single one
    if (details != null && Object.keys(details).length) {
      if (isSentryContexts(details)) {
        Object.entries(details).forEach(([key, context]) => scope.setContext(key, context));
      } else {
        scope.setContext('Message Details', details);
      }
    }

    return scope;
  });
};

export const logError = (category: string, error: Error | string | unknown): void => {
  if (__DEV__) {
    // In DEV, log to the console unless we're running as part of a test-suite
    if (process.env.NODE_ENV !== 'test') {
      logErrorToConsole(category, error);
    }
  } else {
    // Otherwise send to Sentry
    sendErrorToSentry(error);
  }
};

export const logAndCapture = (category: string, message: string, details?: SentryMessageDetails): void => {
  // In DEV mode log to the console unless we're running as part of a test-suite
  if (__DEV__) {
    if (process.env.NODE_ENV === 'test') {
      return;
    }

    doLog(category, message, details);
  } else {
    // Otherwise send log to Sentry
    sendLogToSentry(category, message, details);
  }
};
