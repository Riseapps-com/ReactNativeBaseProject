import { I18n } from '~modules/localization';

import HttpRequestError from '../HttpRequestError';

describe('errors', () => {
  describe('HttpRequestError', () => {
    describe('constructor', () => {
      it('creates errors with 404 status code correctly', () => {
        const code = 'NotFoundException';
        const status = 404;
        const message = I18n.t('errors.notFoundException');
        const details = { useId: '1' };
        const requestError = new HttpRequestError(status, undefined, details);

        expect(requestError).toBeInstanceOf(HttpRequestError);
        expect(requestError).toMatchObject({ code, status, message, details });
      });

      it('creates errors with 4xx (non-404) status code correctly', () => {
        const code = 'InvalidRequestException';
        const status = 400;
        const message = I18n.t('errors.invalidRequestException');
        const details = { useId: '1' };
        const requestError = new HttpRequestError(status, undefined, details);

        expect(requestError).toBeInstanceOf(HttpRequestError);
        expect(requestError).toMatchObject({ code, status, message, details });
      });

      it('creates errors with 5xx status code correctly', () => {
        const code = 'ServerErrorException';
        const status = 500;
        const message = I18n.t('errors.serverErrorException');
        const details = { useId: '1' };
        const requestError = new HttpRequestError(status, undefined, details);

        expect(requestError).toBeInstanceOf(HttpRequestError);
        expect(requestError).toMatchObject({ code, status, message, details });
      });

      it('creates errors with unrecognized errors status code correctly', () => {
        const code = 'UnknownException';
        const status = 600;
        const message = I18n.t('errors.unknownException');
        const details = { useId: '1' };
        const requestError = new HttpRequestError(status, undefined, details);

        expect(requestError).toBeInstanceOf(HttpRequestError);
        expect(requestError).toMatchObject({ code, status, message, details });
      });

      it('creates errors with user supplied message correctly', () => {
        const message = 'custom message';
        const requestError = new HttpRequestError(404, message);

        expect(requestError).toBeInstanceOf(HttpRequestError);
        expect(requestError.message).toBe(message);
      });
    });

    describe('#from', () => {
      it('parses AppError to HttpRequestError', () => {
        const code = 'NotFoundException';
        const status = 404;
        const message = 'Error message.';
        const details = { useId: '1' };
        const appError = { code, message, details };
        const requestError = HttpRequestError.from(appError as any, status);

        expect(requestError).toBeInstanceOf(HttpRequestError);
        expect(requestError).toMatchObject({ code, status, message, details });
      });

      it('overwrites AppError message when new message is specified', () => {
        const code = 'NotFoundException';
        const status = 404;
        const message = 'Error message.';
        const details = { useId: '1' };
        const appError = { code, message, details };
        const requestError = HttpRequestError.from(appError as any, status, 'New error message.');

        expect(requestError).toBeInstanceOf(HttpRequestError);
        expect(requestError.message).toBe('New error message.');
      });
    });

    describe('#fromOriginal', () => {
      it('parses Error to HttpRequestError', () => {
        const error = new Error('Original error message.');
        const code = 'NotFoundException';
        const status = 404;
        const requestError = HttpRequestError.fromOriginal(error, status);

        expect(requestError).toBeInstanceOf(HttpRequestError);
        expect(requestError).toMatchObject({ code, status, message: error.message });
      });

      it('overwrites Error message when new message is specified', () => {
        const error = new Error('Original error message.');
        const status = 404;
        const requestError = HttpRequestError.fromOriginal(error, status, 'New error message.');

        expect(requestError).toBeInstanceOf(HttpRequestError);
        expect(requestError.message).toBe('New error message.');
      });
    });

    describe('addDetail', () => {
      it("adds detail to error when it doesn't exist", () => {
        const status = 522;
        const message = 'Error message.';
        const requestError = new HttpRequestError(status, message);

        requestError.addDetail('userId', '1');

        expect(requestError.details).toMatchObject({ userId: '1' });
      });

      it('adds detail to error when it already exists', () => {
        const status = 522;
        const message = 'Error message.';
        const details = { userId: '1' };
        const requestError = new HttpRequestError(status, message, details);

        requestError.addDetail('userId', '2');

        expect(requestError.details).toMatchObject({ userId: ['1', '2'] });
      });
    });
  });
});
