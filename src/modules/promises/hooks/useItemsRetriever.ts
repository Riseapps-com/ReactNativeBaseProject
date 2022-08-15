import { useCallback, useMemo } from 'react';

import useItemRetriever from './useItemRetriever';

import type {
  ItemsRetrieverFunction,
  ItemsRetrieverResult,
  UseItemsRetrieverOptions,
  UseItemsRetrieverReturn,
} from '../types';

/** We don't have any good ways how to do count queries in DataStore,
 * so we don't really know how many items of any given list we actually have, so we'll have to do a little trick.
 *
 * If a section list only shows at most N items, the DataStore query can query for N + 1.
 * If the number of results returned is <= N then we don't have any more results and
 * we can just show those N items without a "See more" link at the bottom or the "Right arrow".
 * If N + 1 items are returned then the first N items can be rendered along with
 * the "See more" link as well as the "Right arrow".
 */
const useItemsRetriever = <T>(
  retrieveFn: ItemsRetrieverFunction<T>,
  options: UseItemsRetrieverOptions<T> = {}
): UseItemsRetrieverReturn<T> => {
  const { limit, ...restOptions } = options;

  const retrieveFnCallback = useCallback(() => {
    if (limit == null) return retrieveFn();

    return retrieveFn({ limit: limit + 1 });
  }, [limit, retrieveFn]);

  const [result, error, isLoading, refetch] = useItemRetriever(retrieveFnCallback, {
    ...restOptions,
  });

  const hasMore = useMemo(() => {
    if (!result) return false;

    // If the length of the result portion is longer then the page size, then it means there are more pages to retrieve.
    return limit != null && result.length > limit;
  }, [limit, result]);

  const slicedResult = useMemo(() => {
    if (!result) return;

    // We need to remove the last item since we retrieved N + 1 items.
    return hasMore ? result.slice(0, limit) : result;
  }, [hasMore, limit, result]);

  const resultObject: ItemsRetrieverResult<T> = {
    data: slicedResult,
    length: slicedResult?.length || 0,
    limit,
    hasMore,
  };

  return [resultObject, isLoading, error, refetch];
};

export default useItemsRetriever;
