/**
 * Test utilities are required in `jest.after.setup.js` file, where there are set to global
 * namespace to allow their usage in tests without the need to import them. Their types are
 * defined in `@types/jest.d.ts` file.
 */

import React from 'react';

import { NavigationContext } from '@react-navigation/native';
import { act as actHooks } from '@testing-library/react-hooks';
import { act as actComponents, render } from '@testing-library/react-native';
import { RecoilRoot } from 'recoil';

import RuntimeError from '~modules/errors/RuntimeError';

import type {
  MaybeMocked,
  MaybeMockedDeep,
  RenderComponent,
  RenderNavigationComponent,
  RenderStoreComponent,
} from '../types';

/**
 * Renders test component
 */
export const renderComponent: RenderComponent = (Component, props, wrapper?) => {
  return render(<Component {...props} />, { wrapper });
};

export const renderNavigationComponent: RenderNavigationComponent = (Component, isFocused, props, wrapper) => {
  const navContextValue: any = {
    isFocused: () => isFocused,
    addListener: jest.fn(() => jest.fn()),
  };

  return render(
    <RecoilRoot>
      <NavigationContext.Provider value={navContextValue}>
        <Component {...props} />
      </NavigationContext.Provider>
    </RecoilRoot>,
    { wrapper }
  );
};

export const renderStoreComponent: RenderStoreComponent = (Component, props, wrapper) => {
  return render(
    <RecoilRoot>
      <Component {...props} />
    </RecoilRoot>,
    { wrapper }
  );
};

/**
 * Creates mocked parser exception
 */
export const createMockParserException = (parserMethodName = 'parseError'): RuntimeError =>
  new RuntimeError('UnknownException', `Error message for ${parserMethodName}`);

/**
 * Adds correct typings to mocked functions
 */
export function mocked<T>(item: T, deep?: false): MaybeMocked<T>;
export function mocked<T>(item: T, deep: true): MaybeMockedDeep<T>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export function mocked<T>(item: T, _deep = false): MaybeMocked<T> | MaybeMockedDeep<T> {
  return item as any;
}

/** React native 69.4th version uses React 18th version, so there was a lot of major changes.
 * A part of our tests were broken after the upgrade. For some reason, for some components
 * we need to call `act(() => jest.runAllTimers())` twice or more and in this case all the timers
 * will be run correctly. I investigated possible reasons and found nothing suitable.
 * Anyway, all the tests that are started with `act(() => jest.runAllTimers())` just after the components is rendered
 * use this function now. If this issue is fixed inside `@testing-library/react-native` or `jest` packages then will
 * simply remove the second call.
 *
 * Note: current fix doesn't spoil the performance.
 */
export const runAllTimersWrapped = (numberToRun = 2, isHook?: boolean): void => {
  const act = isHook ? actHooks : actComponents;

  new Array(numberToRun).fill(-1).forEach(() => {
    act(() => jest.runAllTimers());
  });
};
