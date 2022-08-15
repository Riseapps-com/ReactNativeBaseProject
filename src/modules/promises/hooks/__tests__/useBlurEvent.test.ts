import { useNavigation } from '@react-navigation/native';
import { renderHook } from '@testing-library/react-hooks';

import { mocked } from '~modules/tests';

import useBlurEvent from '../useBlurEvent';

const mockedUseNavigation = <typeof useNavigation>mocked(useNavigation);

describe('navigation', () => {
  describe('useBlurEvent', () => {
    it('calls addListener if runOnFocus is specified', () => {
      const callback = jest.fn();

      renderHook(() => useBlurEvent(callback, true));

      expect(mockedUseNavigation().addListener).toBeCalledTimes(1);
      expect(mockedUseNavigation().addListener).toBeCalledWith('blur', callback);
    });

    it('does not call addListener if runOnFocus is not specified', () => {
      renderHook(() => useBlurEvent(jest.fn(), false));

      expect(mockedUseNavigation().addListener).toBeCalledTimes(0);
    });
  });
});
