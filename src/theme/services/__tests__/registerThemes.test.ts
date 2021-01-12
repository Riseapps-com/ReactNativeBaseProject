import { dark, light } from '../../config';
import registerThemes from '../registerThemes';

describe('theme', () => {
  describe('registerThemes', () => {
    it('registers themes', () => {
      const appearanceProvider = (): 'light' | 'dark' => 'light';
      const styleSheetFactory = registerThemes({ light, dark }, appearanceProvider);
      const styles = styleSheetFactory(theme => ({
        container: {
          backgroundColor: theme.accent,
        },
      }));

      const expected = {
        styles: {
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
        },
        themes: {
          light,
          dark,
        },
        appearanceProvider,
      };

      expect(expected).toEqual(styles);
    });
  });
});
