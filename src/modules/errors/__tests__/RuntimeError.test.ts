import RuntimeError from '../RuntimeError';

describe('errors', () => {
  describe('RuntimeError', () => {
    describe('constructor', () => {
      it('initializes RuntimeError', () => {
        const code = 'InvalidParameterException';
        const message = 'Error message.';
        const details = { useId: '1' };
        const runtimeError = new RuntimeError(code, message, details);

        expect(runtimeError).toMatchObject({ code, message, details });
      });
    });

    describe('#from', () => {
      it('parses AbelMkrError to RuntimeError', () => {
        const code = 'InvalidParameterException';
        const message = 'Error message.';
        const details = { useId: '1' };
        const abelMkrError = { code, message, details };
        const runtimeError = RuntimeError.from(abelMkrError as any);

        expect(runtimeError).toBeInstanceOf(RuntimeError);
        expect(runtimeError).toMatchObject({ code, message, details });
      });

      it('overwrites AbelMkrError message when new message is specified', () => {
        const code = 'InvalidParameterException';
        const message = 'Error message.';
        const details = { useId: '1' };
        const abelMkrError = { code, message, details };
        const runtimeError = RuntimeError.from(abelMkrError as any, 'New error message.');

        expect(runtimeError.message).toBe('New error message.');
      });
    });

    describe('#fromOriginal', () => {
      it('parses Error to RuntimeError', () => {
        const error = new Error('Original error message.');
        const code = 'InvalidParameterException';
        const runtimeError = RuntimeError.fromOriginal(error, code);

        expect(runtimeError).toBeInstanceOf(RuntimeError);
        expect(runtimeError).toMatchObject({ code, message: error.message });
      });

      it('overwrites Error message when new message is specified', () => {
        const error = new Error('Original error message.');
        const code = 'InvalidParameterException';
        const runtimeError = RuntimeError.fromOriginal(error, code, 'New error message.');

        expect(runtimeError.message).toBe('New error message.');
      });
    });

    describe('addDetail', () => {
      it("adds detail to error when it doesn't exist", () => {
        const code = 'InvalidParameterException';
        const message = 'Error message.';
        const runtimeError = new RuntimeError(code, message);

        runtimeError.addDetail('userId', '1');

        expect(runtimeError.details).toMatchObject({ userId: '1' });
      });

      it('adds detail to error when it already exists', () => {
        const code = 'InvalidParameterException';
        const message = 'Error message.';
        const details = { userId: '1' };
        const runtimeError = new RuntimeError(code, message, details);

        runtimeError.addDetail('userId', '2');

        expect(runtimeError.details).toMatchObject({ userId: ['1', '2'] });
      });
    });
  });
});
