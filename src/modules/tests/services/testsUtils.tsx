/**
 * Test utilities are required in `jest.after.setup.js` file, where there are set to global
 * namespace to allow their usage in tests without the need to import them. Their types are
 * defined in `@types/jest.d.ts` file.
 */

import { render } from '@testing-library/react-native';
import React from 'react';

import RuntimeError from '~modules/errors/RuntimeError';

import { MaybeMocked, MaybeMockedDeep, RenderComponent } from '../types';

/**
 * Renders test component
 */
export const renderComponent: RenderComponent = (Component, props, wrapper?) => {
  return render(<Component {...props} />, { wrapper });
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
