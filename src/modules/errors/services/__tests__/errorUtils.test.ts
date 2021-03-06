import { ErrorCode } from '~modules/errors/types';

import HttpRequestError from '../../HttpRequestError';
import RuntimeError from '../../RuntimeError';
import ValidationError from '../../ValidationError';
import * as errorUtils from '../errorsUtils';

describe('Errors', () => {
  describe('errorUtilities', () => {
    describe('parseError', () => {
      describe('returns unaltered AppErrors when given them', () => {
        it('verifying RuntimeErrors', () => {
          const runtimeError = new RuntimeError(
            'InvalidRequestException',
            'My custom RuntimeError',
            {
              custom: 'dummy-detail-value',
            }
          );

          const parsedError = errorUtils.parseError(runtimeError);

          expect(parsedError).toBe(runtimeError);
        });

        it('verifying ValidationErrors', () => {
          const validationError = new ValidationError(
            'InvalidRequestException',
            'dummy-field',
            'My custom RuntimeError',
            {
              custom: 'dummy-detail-value',
            }
          );

          const parsedError = errorUtils.parseError(validationError);

          expect(parsedError).toBe(validationError);
        });

        it('verifying HttpRequestErrors', () => {
          const validationError = new HttpRequestError(404, 'My custom RuntimeError', {
            custom: 'dummy-detail-value',
          });

          const parsedError = errorUtils.parseError(validationError);

          expect(parsedError).toBe(validationError);
        });
      });

      describe('parses non AppError objects correctly', () => {
        it('returns RuntimeError with code from generic error when available', () => {
          const genericErrorWithCode = {
            code: 'InvalidRequestException',
          };

          const expectedRuntimeError = RuntimeError.fromOriginal(
            genericErrorWithCode,
            'InvalidRequestException',
            'invalidRequestException'
          );

          const parsedError = errorUtils.parseError(genericErrorWithCode);

          expect(parsedError).toEqual(expectedRuntimeError);
        });

        it('returns RuntimeError with "UnknownException" code when no code is available', () => {
          const genericErrorWithNoCode = {
            customErrorCodeField: 'InvalidRequestException',
          };

          const expectedRuntimeError = RuntimeError.fromOriginal(
            genericErrorWithNoCode,
            'UnknownException',
            'unknownException'
          );

          const parsedError = errorUtils.parseError(genericErrorWithNoCode);

          expect(parsedError).toEqual(expectedRuntimeError);
        });

        it('returns RuntimeError with "UnknownException" code when error is not object', () => {
          const errorString = 'dummy error message';

          const expectedRuntimeError = RuntimeError.fromOriginal(
            errorString,
            'UnknownException',
            'unknownException'
          );

          const parsedError = errorUtils.parseError(errorString);

          expect(parsedError).toEqual(expectedRuntimeError);
        });

        it('returns "unknownException" error message for untranslated error codes', () => {
          const untranslatedErrorCode = 'UntranslatedException';
          const genericErrorWithCode = {
            code: untranslatedErrorCode,
          };

          const expectedRuntimeError = RuntimeError.fromOriginal(
            genericErrorWithCode,
            untranslatedErrorCode as ErrorCode,
            'unknownException'
          );

          const parsedError = errorUtils.parseError(genericErrorWithCode);

          expect(parsedError).toEqual(expectedRuntimeError);
        });
      });
    });
  });
});
