import { NavigationContext } from '@react-navigation/native';
import { renderHook } from '@testing-library/react-hooks';
import { act } from '@testing-library/react-native';
import React from 'react';

import { mocked } from '~modules/tests';

import { promiseUtilities } from '../../services';
import useRetriever from '../useRetriever';

jest.mock('../../services');
jest.mock('~modules/statusMessages');

const Wrapper: React.FC = props => {
  const navContextValue: any = {
    isFocused: () => true,
    addListener: jest.fn(() => jest.fn()),
  };

  return <NavigationContext.Provider value={navContextValue}>{props.children}</NavigationContext.Provider>;
};

const mockedPromiseUtilities = mocked(promiseUtilities);
const retrieveFn = jest.fn(() => Promise.resolve('Resolved'));
const defaultValue = 'default';

const useCallbackSpy = jest.spyOn(React, 'useCallback');

afterAll(() => {
  useCallbackSpy.mockRestore();
});

describe('promises', () => {
  describe('useRetriever', () => {
    describe('`retrieveFn` param', () => {
      it('resolves `retrieveFn` and returns its result', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useRetriever(retrieveFn), {
          wrapper: Wrapper,
        });

        await waitForNextUpdate();

        expect(retrieveFn).toBeCalledTimes(1);
        expect(result.current[0]).toBe('Resolved');
      });

      it('passes `retrieveFn` to retry function', async () => {
        const { waitForNextUpdate } = renderHook(() => useRetriever(retrieveFn), { wrapper: Wrapper });

        await waitForNextUpdate();

        expect(mockedPromiseUtilities.retry).toBeCalledTimes(1);
      });
    });

    describe('`defaultValue` param', () => {
      it('returns the default value before `retrieveFn` resolves', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useRetriever(retrieveFn, defaultValue), {
          wrapper: Wrapper,
        });

        expect(result.current[0]).toBe(defaultValue);

        await waitForNextUpdate();

        expect(result.current[0]).toBe('Resolved');
      });
    });

    describe('loading', () => {
      it('sets loading to true before `retrieveFn` resolves', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useRetriever(retrieveFn), {
          wrapper: Wrapper,
        });

        expect(result.current[1]).toBe(true);

        await waitForNextUpdate();
      });

      it('sets loading to false after `retrieveFn` resolves', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useRetriever(retrieveFn), {
          wrapper: Wrapper,
        });

        await waitForNextUpdate();

        expect(result.current[1]).toBe(false);
      });
    });

    describe('runOnFocus', () => {
      it('runs when specified', async () => {
        const { waitForNextUpdate } = renderHook(() => useRetriever(retrieveFn, undefined, true), {
          wrapper: Wrapper,
        });

        await waitForNextUpdate();

        expect(retrieveFn).toBeCalledTimes(1);
      });
    });

    describe('retrieve', () => {
      it('calls retrieve function', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useRetriever(retrieveFn), {
          wrapper: Wrapper,
        });

        await act(async () => {
          await waitForNextUpdate();
          result.current[3]();
        });

        expect(retrieveFn).toBeCalledTimes(2);
        expect(result.current[0]).toBe('Resolved');
      });
    });
  });
});
