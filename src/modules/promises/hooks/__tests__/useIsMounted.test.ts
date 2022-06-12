import { renderHook } from '@testing-library/react-hooks';

import useIsMounted from '../useIsMounted';

describe('promises', () => {
  describe('useIsMounted', () => {
    it('returns true is component is mounted', () => {
      const { result } = renderHook(() => useIsMounted());

      expect(result.current.current).toBeTruthy();
    });

    it('returns false is component is unmounted', () => {
      const { result, unmount } = renderHook(() => useIsMounted());

      expect(result.current.current).toBeTruthy();

      unmount();

      expect(result.current.current).toBeFalsy();
    });
  });
});
