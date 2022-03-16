import { renderHook } from '@testing-library/react-hooks';

import { RuntimeError, ValidationError } from '~modules/errors';
import { useStatusMessage } from '~modules/statusMessages';
import { mocked } from '~modules/tests';

import { promiseUtilities } from '../../services';
import useAsync from '../useAsync';

jest.mock('~modules/statusMessages');

const mockedUseStatusMessage = mocked(useStatusMessage);

describe('promises', () => {
  describe('useAsync', () => {
    describe('`toCall` param', () => {
      it('passes the provided callback to `retry`', async () => {
        const retrySpy = jest.spyOn(promiseUtilities, 'retry').mockImplementationOnce(jest.fn());
        const toCall = jest.fn(async () => Promise.resolve());
        const { result } = renderHook(() => useAsync());
        const doAsync = result.current;

        await doAsync(() => toCall());

        expect(retrySpy).toBeCalledTimes(1);
      });

      it('displays error status message when exception is thrown', () => {
        const mockedDisplayStatusMessage = jest.fn();

        mockedUseStatusMessage.mockImplementationOnce(() => mockedDisplayStatusMessage);
        const error = new RuntimeError('UnknownException', 'Error message.');
        const toCall = jest.fn(async () => Promise.reject(error));
        const { result } = renderHook(() => useAsync());
        const doAsync = result.current;

        doAsync(() => toCall());

        jest.runAllTimers();

        expect(mockedDisplayStatusMessage).toBeCalledTimes(1);
        expect(mockedDisplayStatusMessage).toBeCalledWith(error.message, 'error');
      });
    });

    describe('when `setResultCallback` is provided', () => {
      it('invokes the callback correctly for successfully resolved call', async () => {
        const setResult = jest.fn();
        const { result } = renderHook(() => useAsync());
        const doAsync = result.current;

        await doAsync(async () => Promise.resolve('result'), { setResult });

        expect(setResult).toBeCalledTimes(1);
        expect(setResult).toBeCalledWith('result');
      });
    });

    describe('when `setErrorCallback` is provided', () => {
      it('invokes the callback correctly when error is thrown', () => {
        const setError = jest.fn();
        const error = new RuntimeError('UnknownException', 'Error message.');
        const toCall = jest.fn(async () => Promise.reject(error));
        const { result } = renderHook(() => useAsync());
        const doAsync = result.current;

        doAsync(toCall, { setError });

        jest.runAllTimers();

        expect(setError).toBeCalledTimes(1);
        expect(setError).toBeCalledWith(error);
      });
    });

    describe('when `setIsLoadingCallback` is provided', () => {
      it('invokes the callback correctly for successfully resolved call', async () => {
        const setIsLoading = jest.fn();
        const { result } = renderHook(() => useAsync());
        const doAsync = result.current;

        const promise = doAsync(async () => {}, { setIsLoading });

        expect(setIsLoading).toBeCalledTimes(1);
        expect(setIsLoading).toBeCalledWith(true);

        await promise;
        jest.runAllTimers();

        expect(setIsLoading).toBeCalledTimes(2);
        expect(setIsLoading).toBeCalledWith(false);
      });

      it('invokes the callback correctly for rejected call', async () => {
        const setIsLoading = jest.fn();
        const error = new ValidationError('InvalidParameterException', 'Error message.');

        const { result } = renderHook(() => useAsync());
        const doAsync = result.current;

        const promise = doAsync(async () => Promise.reject(error), { setIsLoading });

        expect(setIsLoading).toBeCalledTimes(1);
        expect(setIsLoading).toBeCalledWith(true);

        try {
          await promise;
          // eslint-disable-next-line no-empty,@typescript-eslint/no-shadow
        } catch (error) {}

        jest.runAllTimers();

        expect(setIsLoading).toBeCalledTimes(2);
        expect(setIsLoading).toBeCalledWith(false);
      });
    });
  });
});
