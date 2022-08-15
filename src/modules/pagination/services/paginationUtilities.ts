import type { PaginationParams } from '../types';

export const slice = <T>(items: T[], params: PaginationParams = {}): T[] => {
  const start = params.page || 0;
  const end = params.limit === undefined ? undefined : start + params.limit;

  return items.slice(start, end);
};
