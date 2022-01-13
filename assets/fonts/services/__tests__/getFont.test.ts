import getFontIos from '../getFont';

describe('assets', () => {
  describe('fonts', () => {
    describe('getFont', () => {
      it('returns `black` font by type', () => {
        expect(getFontIos('black')).toBe('SF Pro Display Black');
      });

      it('returns `heavy` font by type', () => {
        expect(getFontIos('heavy')).toBe('SF Pro Display Heavy');
      });

      it('returns `light` font by type', () => {
        expect(getFontIos('light')).toBe('SF Pro Display Light');
      });

      it('returns `medium` by type', () => {
        expect(getFontIos('medium')).toBe('SF Pro Display Medium');
      });

      it('returns `regular` font by type', () => {
        expect(getFontIos('regular')).toBe('SF Pro Display Regular');
      });

      it('returns `semiBold` font by type', () => {
        expect(getFontIos('semiBold')).toBe('SF Pro Display Semibold');
      });

      it('returns `thin` font by type', () => {
        expect(getFontIos('thin')).toBe('SF Pro Display Thin');
      });

      it('returns `ultraLight` font by type', () => {
        expect(getFontIos('ultraLight')).toBe('SF Pro Display Ultralight');
      });

      it('returns `bold` font by type', () => {
        expect(getFontIos('bold')).toBe('SF Pro Text Bold');
      });
    });
  });
});
