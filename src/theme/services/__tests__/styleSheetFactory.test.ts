import { useColorScheme } from 'react-native';

import { mocked } from '~modules/tests';

import { dark, light } from '../../config';
import styleSheetFactory from '../styleSheetFactory';

jest.mock('react-native/Libraries/Utilities/useColorScheme');

const mockedUseColorScheme = mocked(useColorScheme);

describe('theme', () => {
  describe('styleSheetFactory', () => {
    it('returns correct light styles', () => {
      mockedUseColorScheme.mockImplementationOnce(() => 'light');

      const styles = styleSheetFactory(theme => ({
        container: {
          backgroundColor: theme.accent,
        },
      }));

      const expectedStyles = {
        light: {
          container: {
            backgroundColor: light.accent,
          },
        },
        dark: {
          container: {
            backgroundColor: dark.accent,
          },
        },
      };
      const expectedThemes = {
        light,
        dark,
      };

      expect(expectedStyles).toEqual(styles.styles);
      expect(expectedThemes).toEqual(styles.themes);
      expect(styles.appearanceProvider()).toEqual('light');
    });

    it('returns correct dark styles', () => {
      mockedUseColorScheme.mockImplementationOnce(() => 'dark');

      const styles = styleSheetFactory(theme => ({
        container: {
          backgroundColor: theme.accent,
        },
      }));

      expect(styles.appearanceProvider()).toEqual('dark');
    });

    it('returns correct light styles if theme is undefined', () => {
      mockedUseColorScheme.mockImplementationOnce(() => undefined);

      const styles = styleSheetFactory(theme => ({
        container: {
          backgroundColor: theme.accent,
        },
      }));

      expect(styles.appearanceProvider()).toEqual('light');
    });
  });
});
