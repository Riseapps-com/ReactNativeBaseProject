import { RuntimeError } from '~modules/errors';

import * as promisesUtilities from '../promiseUtilities';

describe('promises', () => {
  describe('promisesUtilities', () => {
    describe('retry', () => {
      it('calls passed function', async () => {
        const promiseFn = jest.fn(() => Promise.resolve());

        expect.assertions(1);
        await promisesUtilities.retry(promiseFn);

        expect(promiseFn).toHaveBeenCalledTimes(1);
      });

      it('passes arguments to the passed function', async () => {
        const args = { data: 'data' };
        const promiseFn = jest.fn(() => Promise.resolve(args));

        expect.assertions(1);
        const data = await promisesUtilities.retry(promiseFn);

        expect(data).toEqual({ data: 'data' });
      });

      it('does not retry the call for unknown errors', async () => {
        const promiseFn = jest.fn(() => Promise.reject('Mocked request failed.'));
        const retry = promisesUtilities.retry(promiseFn);

        jest.runAllTimers();

        expect.assertions(2);
        await expect(retry).rejects.toEqual('Mocked request failed.');
        expect(promiseFn).toHaveBeenCalledTimes(1);
      });

      it('retries the call 3 times for specified errors by default', async () => {
        const promiseFn = jest.fn(() => Promise.reject({ code: 'UnknownException' }));
        const retry = promisesUtilities.retry(promiseFn);

        jest.runAllTimers();

        expect.assertions(2);
        await expect(retry).rejects.toEqual({ code: 'UnknownException' });
        expect(promiseFn).toHaveBeenCalledTimes(3);
      });

      it('allows to speficy custom number of retries', async () => {
        const promiseFn = jest.fn(() => Promise.reject({ code: 'UnknownException' }));
        const retry = promisesUtilities.retry(promiseFn, { times: 5 });

        jest.runAllTimers();

        expect.assertions(2);
        await expect(retry).rejects.toEqual({ code: 'UnknownException' });
        expect(promiseFn).toHaveBeenCalledTimes(5);
      });

      it('aborts the function if timeout is expired', async () => {
        const promiseFn = jest.fn(() => Promise.reject({ code: 'Mocked request failed.' }));
        const retry = promisesUtilities.retry(promiseFn);

        jest.advanceTimersByTime(8000);

        expect.assertions(2);
        await expect(retry).rejects.toEqual(new RuntimeError('RequestWasAbortedException'));
        expect(promiseFn).toHaveBeenCalledTimes(1);
      });

      it('allows to specify custom abort timeout', async () => {
        const promiseFn = jest.fn(() => Promise.reject({ code: 'Mocked request failed.' }));
        const retry = promisesUtilities.retry(promiseFn, { abortTimeout: 1000 });

        jest.advanceTimersByTime(1000);

        expect.assertions(2);
        await expect(retry).rejects.toEqual(new RuntimeError('RequestWasAbortedException'));
        expect(promiseFn).toHaveBeenCalledTimes(1);
      });
    });
  });
});
