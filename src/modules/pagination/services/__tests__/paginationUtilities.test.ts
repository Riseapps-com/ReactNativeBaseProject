import * as paginationUtilities from '../paginationUtilities';

const items = ['item1', 'item2', 'item3', 'item4'];

describe('pagination', () => {
  describe('paginationUtilities', () => {
    describe('slice', () => {
      it('slices items if `params` are specified', () => {
        const result = paginationUtilities.slice(items, { page: 1, limit: 1 });

        expect(result).toEqual(['item2']);
      });

      it('sets default `start` if `page` is not specified', () => {
        const result = paginationUtilities.slice(items, { limit: 2 });

        expect(result).toEqual(['item1', 'item2']);
      });

      it('sets default `end` if `limit` is not specified', () => {
        const result = paginationUtilities.slice(items, { page: 2 });

        expect(result).toEqual(['item3', 'item4']);
      });
    });
  });
});
