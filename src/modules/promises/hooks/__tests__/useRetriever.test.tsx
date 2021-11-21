import { NavigationContext } from '@react-navigation/native';
import { act, renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { RecoilRoot } from 'recoil';

import { mocked } from '~modules/tests';

import { promiseUtilities } from '../../services';
import useRetriever from '../useRetriever';

jest.mock('../../services');

const Wrapper: React.FC = props => {
  const navContextValue: any = {
    isFocused: () => true,
    addListener: jest.fn(() => jest.fn()),
  };

  return (
    <RecoilRoot>
      <NavigationContext.Provider value={navContextValue}>
        {props.children}
      </NavigationContext.Provider>
    </RecoilRoot>
  );
};

const mockedPromiseUtilities = mocked(promiseUtilities);
const retrieveFn = jest.fn(async () => Promise.resolve('Resolved'));
let retrieveFnDeps: any = [];
const defaultValue = 'default';

const useCallbackSpy = jest.spyOn(React, 'useCallback');

afterAll(() => {
  useCallbackSpy.mockRestore();
});

describe('promises', () => {
  describe('useRetriever', () => {
    describe('`retrieveFn` param', () => {
      it('resolves `retrieveFn` and returns its result', async () => {
        const { result, waitForNextUpdate } = renderHook(
          () => useRetriever(retrieveFn, retrieveFnDeps),
          {
            wrapper: Wrapper,
          }
        );

        await waitForNextUpdate();

        expect(retrieveFn).toBeCalledTimes(1);
        expect(result.current[0]).toBe('Resolved');
      });

      it('passes `retrieveFn` to retry function', async () => {
        const { waitForNextUpdate } = renderHook(() => useRetriever(retrieveFn, retrieveFnDeps), {
          wrapper: Wrapper,
        });

        await waitForNextUpdate();

        expect(mockedPromiseUtilities.retry).toBeCalledTimes(1);
      });

      it('passes correct parameters to useCallback', async () => {
        retrieveFnDeps = ['dep1', 'dep2'];
        const { waitForNextUpdate } = renderHook(() => useRetriever(retrieveFn, retrieveFnDeps), {
          wrapper: Wrapper,
        });

        await waitForNextUpdate();

        expect(useCallbackSpy).toBeCalledWith(retrieveFn, retrieveFnDeps);
      });
    });

    describe('`defaultValue` param', () => {
      it('returns the default value before `retrieveFn` resolves', async () => {
        const { result, waitForNextUpdate } = renderHook(
          () => useRetriever(retrieveFn, retrieveFnDeps, defaultValue),
          {
            wrapper: Wrapper,
          }
        );

        expect(result.current[0]).toBe(defaultValue);

        await waitForNextUpdate();

        expect(result.current[0]).toBe('Resolved');
      });
    });

    describe('loading', () => {
      it('sets loading to true before `retrieveFn` resolves', async () => {
        const { result, waitForNextUpdate } = renderHook(
          () => useRetriever(retrieveFn, retrieveFnDeps),
          {
            wrapper: Wrapper,
          }
        );

        expect(result.current[1]).toBe(true);

        await waitForNextUpdate();
      });

      it('sets loading to false after `retrieveFn` resolves', async () => {
        const { result, waitForNextUpdate } = renderHook(
          () => useRetriever(retrieveFn, retrieveFnDeps),
          {
            wrapper: Wrapper,
          }
        );

        await waitForNextUpdate();

        expect(result.current[1]).toBe(false);
      });
    });

    describe('runOnFocus', () => {
      it('runs when specified', async () => {
        const { waitForNextUpdate } = renderHook(
          () => useRetriever(retrieveFn, retrieveFnDeps, undefined, true),
          {
            wrapper: Wrapper,
          }
        );

        await waitForNextUpdate();

        expect(retrieveFn).toBeCalledTimes(1);
      });
    });

    describe('retrieve', () => {
      it('calls retrieve function', async () => {
        const { result, waitForNextUpdate } = renderHook(
          () => useRetriever(retrieveFn, retrieveFnDeps),
          {
            wrapper: Wrapper,
          }
        );

        await act(async () => {
          result.current[2]();
          await waitForNextUpdate();
        });

        expect(retrieveFn).toBeCalledTimes(2);
        expect(result.current[0]).toBe('Resolved');
      });
    });
  });
});
