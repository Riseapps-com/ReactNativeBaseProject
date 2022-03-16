import { useColorScheme } from 'react-native';

import { renderHook } from '@testing-library/react-hooks';

import { darkImages, lightImages, useImages } from '~assets';
import { mocked } from '~modules/tests';

jest.mock('react-native/Libraries/Utilities/useColorScheme');

const mockedUseColorScheme = mocked(useColorScheme);

describe('assets', () => {
  describe('images', () => {
    describe('useImages', () => {
      it('returns light images if theme is light', () => {
        mockedUseColorScheme.mockImplementationOnce(() => 'light');

        const { result } = renderHook(() => useImages());

        expect(result.current).toEqual(lightImages);
      });

      it('returns dark images if theme is dark', () => {
        mockedUseColorScheme.mockImplementationOnce(() => 'dark');

        const { result } = renderHook(() => useImages());

        expect(result.current).toEqual(darkImages);
      });
    });
  });
});
