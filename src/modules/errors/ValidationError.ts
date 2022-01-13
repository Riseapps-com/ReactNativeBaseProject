import AppError from './AppError';
import { ErrorCode, ErrorDetails } from './types';

export default class ValidationError extends AppError {
  field: string;

  constructor(code: ErrorCode, field: string, message?: string, details: ErrorDetails = {}) {
    super(code, message, details);

    this.field = field;
  }

  static from(error: AppError, field: string, message?: string): ValidationError {
    return new ValidationError(error.code, field, message || error.message, error.details);
  }

  static fromOriginal(originalError: any, code: ErrorCode, field: string, message?: string): ValidationError {
    const errorMessage = message || originalError?.message || originalError.toString();
    const validationError = new ValidationError(code, field, errorMessage);

    validationError.originalError = originalError;

    return validationError;
  }
}
