import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { RecoilRoot } from 'recoil';

import { ValidationError } from '~modules/errors';

import { promiseUtilities } from '../../services';
import useAsync from '../useAsync';

const Wrapper: React.FC = props => {
  return <RecoilRoot>{props.children}</RecoilRoot>;
};

describe('promises', () => {
  describe('useAsync', () => {
    describe('`toCall` param', () => {
      it('passes the provided callback to `retry`', async () => {
        const retrySpy = jest.spyOn(promiseUtilities, 'retry').mockImplementationOnce(jest.fn());
        const toCall = jest.fn(async () => Promise.resolve());

        const { result } = renderHook(() => useAsync(), { wrapper: Wrapper });
        const doAsync = result.current;

        await doAsync(() => toCall());

        jest.runAllTimers();

        expect(retrySpy).toBeCalledTimes(1);
      });

      it('rethrows error when any other exception is thrown', async () => {
        const error = new ValidationError('UnknownException', 'email', 'Error message.');
        const toCall = jest.fn(async () => Promise.reject(error));

        const { result } = renderHook(() => useAsync(), { wrapper: Wrapper });
        const doAsync = result.current;

        const resolved = doAsync(async () => toCall());

        jest.runAllTimers();

        await expect(resolved).rejects.toThrowError(ValidationError);
      });
    });

    describe('when `setIsLoadingCallback` is provided', () => {
      it('invokes the callback correctly for successfully resolved call', async () => {
        const setIsLoadingCallback = jest.fn();

        const { result } = renderHook(() => useAsync(), { wrapper: Wrapper });
        const doAsync = result.current;

        const promise = doAsync(async () => {}, setIsLoadingCallback);

        expect(setIsLoadingCallback).toBeCalledTimes(1);
        expect(setIsLoadingCallback).toBeCalledWith(true);

        await promise;
        jest.runAllTimers();

        expect(setIsLoadingCallback).toBeCalledTimes(2);
        expect(setIsLoadingCallback).toBeCalledWith(false);
      });

      it('invokes the callback correctly for rejected call', async () => {
        const setIsLoadingCallback = jest.fn();
        const error = new ValidationError('UnknownException', 'Error message.');

        const { result } = renderHook(() => useAsync(), { wrapper: Wrapper });
        const doAsync = result.current;

        const promise = doAsync(() => Promise.reject(error), setIsLoadingCallback);

        expect(setIsLoadingCallback).toBeCalledTimes(1);
        expect(setIsLoadingCallback).toBeCalledWith(true);

        jest.runAllTimers();

        await expect(promise).rejects.toThrow(error);

        expect(setIsLoadingCallback).toBeCalledTimes(2);
        expect(setIsLoadingCallback).toBeCalledWith(false);
      });
    });

    describe('when `setResultCallback` is provided', () => {
      it('invokes the callback correctly for successfully resolved call', async () => {
        const setResultCallback = jest.fn();

        const { result } = renderHook(() => useAsync(), { wrapper: Wrapper });
        const doAsync = result.current;

        const promise = doAsync(
          async () => Promise.resolve('result'),
          undefined,
          setResultCallback
        );

        await promise;
        jest.runAllTimers();

        expect(setResultCallback).toBeCalledTimes(1);
        expect(setResultCallback).toBeCalledWith('result');
      });
    });
  });
});
