import { renderHook } from '@testing-library/react-hooks';
import React from 'react';

import { mocked } from '~modules/tests';

import { promiseUtilities } from '../../services';
import useRetriever from '../useRetriever';

jest.mock('@react-navigation/native', () => ({
  useFocusEffect: () => jest.fn(),
}));

jest.mock('../../services');

const mockedPromiseUtilities = mocked(promiseUtilities);
const retrieveFn = jest.fn(() => Promise.resolve('Resolved'));
let retrieveFnDeps: any = [];
const defaultValue = 'default';

const useCallbackSpy = jest.spyOn(React, 'useCallback');

afterAll(() => {
  useCallbackSpy.mockRestore();
});

describe('promises', () => {
  describe('useRetriever', () => {
    describe('`retrieveFn` param', () => {
      it("resolves `retrieveFn` and returns it's result", async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
          useRetriever(retrieveFn, retrieveFnDeps)
        );

        await waitForNextUpdate();

        expect(retrieveFn).toBeCalledTimes(1);
        expect(result.current[0]).toBe('Resolved');
      });

      it('passes `retrieveFn` to retry function', async () => {
        const { waitForNextUpdate } = renderHook(() => useRetriever(retrieveFn, retrieveFnDeps));

        await waitForNextUpdate();

        expect(mockedPromiseUtilities.retry).toBeCalledTimes(1);
      });

      it('passes correct parameters to useCallback', async () => {
        retrieveFnDeps = ['dep1', 'dep2'];
        const { waitForNextUpdate } = renderHook(() => useRetriever(retrieveFn, retrieveFnDeps));

        await waitForNextUpdate();

        expect(useCallbackSpy).toBeCalledWith(retrieveFn, retrieveFnDeps);
      });
    });

    describe('`defaultValue` param', () => {
      it('returns the default value before `retrieveFn` resolves', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
          useRetriever(retrieveFn, retrieveFnDeps, defaultValue)
        );

        expect(result.current[0]).toBe(defaultValue);

        await waitForNextUpdate();

        expect(result.current[0]).toBe('Resolved');
      });
    });

    describe('loading', () => {
      it('sets loading to true before `retrieveFn` resolves', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
          useRetriever(retrieveFn, retrieveFnDeps)
        );

        expect(result.current[1]).toBe(true);

        await waitForNextUpdate();
      });

      it('sets loading to false after `retrieveFn` resolves', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
          useRetriever(retrieveFn, retrieveFnDeps)
        );

        await waitForNextUpdate();

        expect(result.current[1]).toBe(false);
      });
    });

    // I am skipping the test until we're able to figure out how to properly test this case
    // eslint-disable-next-line jest/no-disabled-tests
    describe.skip('runOnFocus', () => {
      it('runs when specified', async () => {
        const { waitForNextUpdate } = renderHook(() =>
          useRetriever(retrieveFn, retrieveFnDeps, undefined, true)
        );

        await waitForNextUpdate();

        expect(retrieveFn).toBeCalledTimes(1);
      });
    });
  });
});
