import { useColorScheme } from 'react-native';

import { renderHook } from '@testing-library/react-hooks';

import { mocked } from '~modules/tests';

import { dark, light } from '../../config';
import { styleSheetFactory } from '../../services';
import useTheme from '../useTheme';

jest.mock('react-native/Libraries/Utilities/useColorScheme');

const mockedUseColorScheme = mocked(useColorScheme);

describe('theme', () => {
  describe('useTheme', () => {
    it('returns correct light styles', () => {
      mockedUseColorScheme.mockImplementationOnce(() => 'light');

      const styles = styleSheetFactory(theme => ({
        container: {
          backgroundColor: theme.accent,
        },
      }));
      const expected = [
        {
          container: {
            backgroundColor: light.accent,
          },
        },
        light,
        'light',
      ];

      const { result } = renderHook(() => useTheme(styles));

      expect(result.current).toEqual(expected);
    });

    it('returns correct dark styles', () => {
      mockedUseColorScheme.mockImplementationOnce(() => 'dark');

      const styles = styleSheetFactory(theme => ({
        container: {
          backgroundColor: theme.accent,
        },
      }));
      const expected = [
        {
          container: {
            backgroundColor: dark.accent,
          },
        },
        dark,
        'dark',
      ];

      const { result } = renderHook(() => useTheme(styles));

      expect(result.current).toEqual(expected);
    });
  });
});
