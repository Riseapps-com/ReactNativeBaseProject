import type { AppError } from '~modules/errors';

export type UseItemRetrieverOptions<T> = {
  defaultValue?: Nullable<T>;
  runOnFocus?: boolean;
};

export type UseItemsRetrieverOptions<T> = UseItemRetrieverOptions<T[]> & {
  limit?: number;
};

export type ItemRetrieverFunction<T> = () => Promise<Nullable<T>>;

export type ItemsRetrieverFunctionOptions = {
  limit?: number;
};

export type ItemsRetrieverFunction<T> = (params?: ItemsRetrieverFunctionOptions) => Promise<OptionalNullable<T[]>>;

export type UseItemRetrieverReturn<T> = [
  OptionalNullable<T>,
  OptionalNullable<boolean>,
  OptionalNullable<AppError>,
  () => void
];

export type ItemsRetrieverResult<T> = {
  data: OptionalNullable<T[]>;
  length: number;
  hasMore: boolean;
  limit?: number;
};

export type UseItemsRetrieverReturn<T> = [
  ItemsRetrieverResult<T>,
  OptionalNullable<AppError>,
  OptionalNullable<boolean>,
  () => void
];
