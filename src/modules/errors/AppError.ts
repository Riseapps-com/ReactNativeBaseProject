import { ErrorCode, ErrorDetails } from './types';

export default abstract class AppError extends Error {
  code: ErrorCode;

  details: ErrorDetails;

  originalError: unknown;

  protected constructor(code: ErrorCode, message?: string, details: ErrorDetails = {}) {
    super(message);

    this.code = code;
    this.details = details;
  }

  addDetail(key: string, value: unknown): this {
    // If there is already a detail value under that key we'll automatically
    // add this value alongside it in an array, converting the existing value as necessary
    const existingValue: unknown = this.details[key];

    if (existingValue) {
      if (Array.isArray(existingValue)) {
        existingValue.push(value);
      } else {
        this.details[key] = [existingValue, value];
      }
    } else {
      this.details[key] = value;
    }

    return this;
  }
}
