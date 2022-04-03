import { renderHook } from '@testing-library/react-hooks';

import useInterval from '../useInterval';

describe('promises', () => {
  describe('useInterval', () => {
    it('calls callback with the interval', () => {
      const callback = jest.fn();
      const { result } = renderHook(() => useInterval());

      const [callWithInterval, cancel] = result.current;

      callWithInterval(callback, 1000);

      jest.advanceTimersByTime(1000);
      cancel();

      expect(callback).toBeCalledTimes(1);
    });

    it('cancels callback', () => {
      const callback = jest.fn();
      const { result } = renderHook(() => useInterval());

      const [callWithInterval, cancel] = result.current;

      callWithInterval(callback, 1000);
      cancel();

      jest.runAllTimers();

      expect(callback).toBeCalledTimes(0);
    });
  });
});
