import { RenderAPI } from '@testing-library/react-native';
import React from 'react';

type MockableFunction = (...args: any[]) => any;
type MethodKeysOf<T> = { [K in keyof T]: T[K] extends MockableFunction ? K : never }[keyof T];
type PropertyKeysOf<T> = { [K in keyof T]: T[K] extends MockableFunction ? never : K }[keyof T];
type ArgumentsOf<T> = T extends (...args: infer A) => any ? A : never;
type ConstructorArgumentsOf<T> = T extends new (...args: infer A) => any ? A : never;

type MockWithArgs<T extends MockableFunction> = {
  new (...args: ConstructorArgumentsOf<T>): T;
  (...args: ArgumentsOf<T>): ReturnType<T>;
} & jest.MockInstance<ReturnType<T>, ArgumentsOf<T>>;

type MaybeMockedConstructor<T> = T extends new (...args: any[]) => infer R
  ? jest.MockInstance<R, ConstructorArgumentsOf<T>>
  : // eslint-disable-next-line @typescript-eslint/ban-types
    {};
type MockedFunction<T extends MockableFunction> = MockWithArgs<T> & { [K in keyof T]: T[K] };
// eslint-disable-next-line @typescript-eslint/no-use-before-define
type MockedFunctionDeep<T extends MockableFunction> = MockWithArgs<T> & MockedObjectDeep<T>;
type MockedObject<T> = MaybeMockedConstructor<T> &
  { [K in MethodKeysOf<T>]: T[K] extends MockableFunction ? MockedFunction<T[K]> : T[K] } &
  { [K in PropertyKeysOf<T>]: T[K] };
type MockedObjectDeep<T> = MaybeMockedConstructor<T> &
  { [K in MethodKeysOf<T>]: T[K] extends MockableFunction ? MockedFunctionDeep<T[K]> : T[K] } &
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  { [K in PropertyKeysOf<T>]: MaybeMockedDeep<T[K]> };

export type MaybeMockedDeep<T> = T extends MockableFunction
  ? MockedFunctionDeep<T>
  : T extends object // eslint-disable-line @typescript-eslint/ban-types
  ? MockedObjectDeep<T>
  : T;
export type MaybeMocked<T> = T extends MockableFunction
  ? MockedFunction<T>
  : // eslint-disable-next-line @typescript-eslint/ban-types
  T extends object
  ? MockedObject<T>
  : T;

export type RenderComponent = <T>(
  Component: (() => JSX.Element) | React.FC<any>,
  props?: T,
  Wrapper?: (() => JSX.Element) | React.FC<any>
) => RenderAPI;

export type RenderNavigationComponent = <T>(
  Component: (() => JSX.Element) | React.FC<any>,
  props?: T,
  Wrapper?: (() => JSX.Element) | React.FC<any>
) => RenderAPI;
