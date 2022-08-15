import React from 'react';

import { NavigationContext } from '@react-navigation/native';
import { renderHook } from '@testing-library/react-hooks';

import useItemsRetriever from '../useItemsRetriever';

jest.mock('../../services');
jest.mock('~modules/statusMessages');

const Wrapper: React.FC<React.PropsWithChildren> = props => {
  const navContextValue: any = {
    isFocused: () => true,
    addListener: jest.fn(() => jest.fn()),
  };

  return <NavigationContext.Provider value={navContextValue}>{props.children}</NavigationContext.Provider>;
};

const retrieveFn = jest.fn(() => Promise.resolve([]));
const limit = 12;

describe('promises', () => {
  describe('useItemRetriever', () => {
    describe('`retrieveFn` param', () => {
      it('resolves `retrieveFn` and returns its result', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useItemsRetriever(retrieveFn), {
          wrapper: Wrapper,
        });

        await waitForNextUpdate();

        expect(retrieveFn).toBeCalledTimes(1);
        expect(result.current[0]).toEqual({ data: [], hasMore: false, length: 0, limit: undefined });
      });

      describe('limit', () => {
        it('passes limit param to `retrieveFn`', async () => {
          const { waitForNextUpdate } = renderHook(() => useItemsRetriever(retrieveFn, { limit }), {
            wrapper: Wrapper,
          });

          await waitForNextUpdate();

          expect(retrieveFn).toBeCalledWith({ limit: limit + 1 });
        });

        it('returns limit', async () => {
          const { result, waitForNextUpdate } = renderHook(() => useItemsRetriever(retrieveFn, { limit }), {
            wrapper: Wrapper,
          });

          await waitForNextUpdate();

          expect(result.current[0]).toMatchObject({ limit });
        });
      });

      describe('hasMore', () => {
        it('returns false when no result was returned by `retrieveFn`', async () => {
          const { result, waitForNextUpdate } = renderHook(() => useItemsRetriever(retrieveFn), {
            wrapper: Wrapper,
          });

          await waitForNextUpdate();

          expect(result.current[0]).toMatchObject({ hasMore: false });
        });

        it('returns false when limit was not set', async () => {
          const retrieveFnWithData = jest.fn(() => Promise.resolve([{}, {}, {}, {}, {}]));
          const { result, waitForNextUpdate } = renderHook(() => useItemsRetriever(retrieveFnWithData), {
            wrapper: Wrapper,
          });

          await waitForNextUpdate();

          expect(result.current[0]).toMatchObject({ hasMore: false });
        });

        it('returns true when result has more objects than limit', async () => {
          const retrieveFnWithData = jest.fn(() => Promise.resolve([{}, {}, {}, {}, {}]));
          const { result, waitForNextUpdate } = renderHook(() => useItemsRetriever(retrieveFnWithData, { limit: 4 }), {
            wrapper: Wrapper,
          });

          await waitForNextUpdate();

          expect(result.current[0]).toMatchObject({ hasMore: true });
        });
      });

      describe('result', () => {
        it('returns all objects returned by `retrieveFn` if no limit was set', async () => {
          const retrieveFnWithData = jest.fn(() => Promise.resolve([{}, {}, {}, {}, {}, {}, {}, {}, {}]));
          const { result, waitForNextUpdate } = renderHook(() => useItemsRetriever(retrieveFnWithData), {
            wrapper: Wrapper,
          });

          await waitForNextUpdate();

          expect(result.current[0]).toMatchObject({ data: [{}, {}, {}, {}, {}, {}, {}, {}, {}], length: 9 });
        });

        it('returns only objects up to a given limit', async () => {
          const retrieveFnWithData = jest.fn(() => Promise.resolve([{}, {}, {}, {}]));
          const { result, waitForNextUpdate } = renderHook(() => useItemsRetriever(retrieveFnWithData, { limit: 3 }), {
            wrapper: Wrapper,
          });

          await waitForNextUpdate();

          expect(result.current[0]).toMatchObject({ data: [{}, {}, {}], length: 3 });
        });
      });
    });
  });
});
