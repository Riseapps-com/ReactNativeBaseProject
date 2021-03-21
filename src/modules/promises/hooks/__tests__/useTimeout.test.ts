import { renderHook } from '@testing-library/react-hooks';

import useTimeout from '../useTimeout';

describe('promises', () => {
  describe('useTimeout', () => {
    it('calls callback with the timeout', () => {
      const callback = jest.fn();
      const { result } = renderHook(() => useTimeout());

      const [callWithTimeout] = result.current;

      callWithTimeout(callback, 1000);

      jest.runAllTimers();

      expect(callback).toBeCalledTimes(1);
    });

    it('cancels callback', () => {
      const callback = jest.fn();
      const { result } = renderHook(() => useTimeout());

      const [callWithTimeout, cancel] = result.current;

      callWithTimeout(callback, 1000);
      cancel();

      jest.runAllTimers();

      expect(callback).toBeCalledTimes(0);
    });
  });
});
