import { renderHook } from '@testing-library/react-hooks';

import { useStore } from '../storeContext';

describe('state', () => {
  describe('storeContext', () => {
    it('return store', () => {
      const { result } = renderHook(() => useStore());

      expect(result.current.countriesStore).not.toBeUndefined();
      expect(result.current.stores).toHaveLength(1);
    });
  });
});
