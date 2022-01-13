import { SortDirection } from '../types';

export const comparator = <T extends Record<string, any>>(sortBy?: string, sortDirection?: SortDirection) => {
  return (a: T, b: T) => {
    // Tolerate null values by sorting them to the end rather than erroring out
    // If the sort direction is specified as `descending` then the return value should be reversed
    if (!a || !b) {
      if (!b) return sortDirection === 'descending' ? 1 : -1;

      return sortDirection === 'descending' ? -1 : 1;
    }

    let comparison = 0;

    if (sortBy) {
      // We want to sort objects that have a sortBy field value
      // ahead of objects that do not have a sortBy field value
      const aField = (a as any)[sortBy];
      const bField = (b as any)[sortBy];

      if (aField != null && bField != null) {
        comparison = aField < bField ? -1 : 1;
      } else if (aField != null) {
        comparison = -1;
      } else if (bField != null) {
        comparison = 1;
      }

      // If the sort direction is specified as `descending`
      // then the comparison values should be reversed
      if (sortDirection === 'descending') comparison *= -1;
    }

    return comparison;
  };
};
