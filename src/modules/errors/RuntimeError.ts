import AppError from './AppError';
import { ErrorCode, ErrorDetails } from './types';

export default class RuntimeError extends AppError {
  constructor(code: ErrorCode, message?: string, details: ErrorDetails = {}) {
    super(code, message, details);
  }

  static from(error: AppError, message?: string) {
    return new RuntimeError(error.code, message || error.message, error.details);
  }

  static fromOriginal(originalError: any, code: ErrorCode, message?: string) {
    const errorMessage = message || originalError?.message || originalError.toString();
    const runtimeError = new RuntimeError(code, errorMessage);

    runtimeError.originalError = originalError;

    return runtimeError;
  }
}
