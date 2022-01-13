import ValidationError from '../ValidationError';

describe('errors', () => {
  describe('ValidationError', () => {
    describe('constructor', () => {
      it('initializes ValidationError', () => {
        const code = 'InvalidParameterException';
        const field = 'password';
        const message = 'Error message.';
        const details = { useId: '1' };
        const validationError = new ValidationError(code, field, message, details);

        expect(validationError).toMatchObject({ code, field, message, details });
      });
    });

    describe('#from', () => {
      it('parses AbelMkrError to ValidationError', () => {
        const code = 'InvalidParameterException';
        const field = 'password';
        const message = 'Error message.';
        const details = { useId: '1' };
        const abelMkrError = { code, message, details };
        const validationError = ValidationError.from(abelMkrError as any, field);

        expect(validationError).toBeInstanceOf(ValidationError);
        expect(validationError).toMatchObject({ code, field, message, details });
      });

      it('overwrites AbelMkrError message when new message is specified', () => {
        const code = 'InvalidParameterException';
        const field = 'password';
        const message = 'Error message.';
        const details = { useId: '1' };
        const abelMkrError = { code, message, details };
        const validationError = ValidationError.from(abelMkrError as any, field, 'New error message.');

        expect(validationError.message).toBe('New error message.');
      });
    });

    describe('#fromOriginal', () => {
      it('parses Error to ValidationError', () => {
        const error = new Error('Original error message.');
        const code = 'InvalidParameterException';
        const field = 'password';
        const validationError = ValidationError.fromOriginal(error, code, field);

        expect(validationError).toBeInstanceOf(ValidationError);
        expect(validationError).toMatchObject({ code, field, message: error.message });
      });

      it('overwrites Error message when new message is specified', () => {
        const error = new Error('Original error message.');
        const code = 'InvalidParameterException';
        const field = 'password';
        const validationError = ValidationError.fromOriginal(error, code, field, 'New error message.');

        expect(validationError.message).toBe('New error message.');
      });
    });

    describe('addDetail', () => {
      it("adds detail to error when it doesn't exist", () => {
        const code = 'InvalidParameterException';
        const field = 'password';
        const message = 'Error message.';
        const validationError = new ValidationError(code, field, message);

        validationError.addDetail('userId', '1');

        expect(validationError.details).toMatchObject({ userId: '1' });
      });

      it('adds detail to error when it already exists', () => {
        const code = 'InvalidParameterException';
        const field = 'password';
        const message = 'Error message.';
        const details = { userId: '1' };
        const validationError = new ValidationError(code, field, message, details);

        validationError.addDetail('userId', '2');

        expect(validationError.details).toMatchObject({ userId: ['1', '2'] });
      });
    });
  });
});
