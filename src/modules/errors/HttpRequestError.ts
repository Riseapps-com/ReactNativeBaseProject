import AppError from './AppError';
import { errorsUtils } from './services';
import { ErrorDetails } from './types';

export default class HttpRequestError extends AppError {
  status?: number;

  constructor(httpStatusCode?: number, message?: string, details: ErrorDetails = {}) {
    const errorCode = errorsUtils.translateHttpStatusCode(httpStatusCode);
    const errorMessage = message || errorsUtils.getHttpErrorMessage(errorCode);

    super(errorCode, errorMessage, details);

    this.status = httpStatusCode;
  }

  static from(error: AppError, httpStatusCode: number, message?: string): HttpRequestError {
    return new HttpRequestError(httpStatusCode, message || error.message, error.details);
  }

  static fromOriginal(originalError: any, httpStatusCode: number, message?: string): HttpRequestError {
    const errorMessage = message || originalError?.message || originalError.toString();
    const requestError = new HttpRequestError(httpStatusCode, errorMessage);

    requestError.originalError = originalError;

    return requestError;
  }
}
