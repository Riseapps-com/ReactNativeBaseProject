/**
 * Test utilities are required in `jest.after.setup.js` file, where there are set to global
 * namespace to allow their usage in tests without the need to import them. Their types are
 * defined in `@types/jest.d.ts` file.
 */

import { NavigationContext } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import React from 'react';

import RuntimeError from '~modules/errors/RuntimeError';
import { rootStore, StoreContext } from '~modules/state';

import {
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

export const renderNavigationComponent: RenderNavigationComponent = (
  Component,
  isFocused,
  props,
  wrapper
) => {
  const navContextValue: any = {
    isFocused: () => isFocused,
    addListener: jest.fn(() => jest.fn()),
  };

  return render(
    <StoreContext.Provider value={rootStore}>
      <NavigationContext.Provider value={navContextValue}>
        <Component {...props} />
      </NavigationContext.Provider>
    </StoreContext.Provider>,
    { wrapper }
  );
};

export const renderStoreComponent: RenderStoreComponent = (Component, props, wrapper) => {
  return render(
    <StoreContext.Provider value={rootStore}>
      <Component {...props} />
    </StoreContext.Provider>,
    { wrapper }
  );
};

/**
 * Creates mocked parser exception
 */
export const createMockParserException = (parserMethodName = 'parseError') =>
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
