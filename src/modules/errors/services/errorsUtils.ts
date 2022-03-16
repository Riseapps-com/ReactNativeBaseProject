import { I18n } from '~modules/localization';

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
      return I18n.t('errors.notFoundException');
    case 'InvalidRequestException':
      return I18n.t('errors.invalidRequestException');
    case 'ServerErrorException':
      return I18n.t('errors.serverErrorException');
    default:
      return I18n.t('errors.unknownException');
  }
};
