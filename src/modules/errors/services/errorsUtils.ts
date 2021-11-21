import { I18n } from '~modules/localization';

import AppError from '../AppError';
import RuntimeError from '../RuntimeError';
import { ErrorCode, HttpStatusCode } from '../types';

export const translateHttpStatusCode = (httpStatusCode?: number): ErrorCode => {
  if (httpStatusCode === HttpStatusCode.NOT_FOUND) {
    return 'NotFoundException';
  }

  if (
    httpStatusCode &&
    httpStatusCode >= HttpStatusCode.BAD_REQUEST &&
    httpStatusCode < HttpStatusCode.INTERNAL_SERVER_ERROR
  ) {
    return 'InvalidRequestException';
  }

  if (
    httpStatusCode &&
    httpStatusCode >= HttpStatusCode.INTERNAL_SERVER_ERROR &&
    httpStatusCode <= HttpStatusCode.NETWORK_AUTHENTICATION_REQUIRED
  ) {
    return 'ServerErrorException';
  }

  return 'UnknownException';
};

export const getHttpErrorMessage = (errorCode: ErrorCode): string => {
  switch (errorCode) {
    case 'NotFoundException':
      return I18n.t('notFoundException');
    case 'InvalidRequestException':
      return I18n.t('invalidRequestException');
    case 'ServerErrorException':
      return I18n.t('serverErrorException');
    default:
      return I18n.t('unknownException');
  }
};

export const parseError = (error: any) => {
  // We don't want to parse our own error types
  if (error instanceof AppError) return error;

  const code = typeof error === 'object' && error.code ? error.code : 'UnknownException';
  const i18nKey = `${code[0].toLowerCase()}${code.slice(1)}`;

  return RuntimeError.fromOriginal(
    error,
    code,
    I18n.t(i18nKey, { defaultValue: I18n.t('unknownException') })
  );
};
