export type PaginationParams = {
  page?: number;
  limit?: number;
};

export type PaginationMode = 'paginationRow' | 'rightAction';

export type SectionWithPagination = {
  hasMore?: boolean;
  paginationMode?: PaginationMode;
};
