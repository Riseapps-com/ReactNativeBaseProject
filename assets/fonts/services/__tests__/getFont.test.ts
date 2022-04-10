import getFontIos from '../getFont';

describe('assets', () => {
  describe('fonts', () => {
    describe('getFont', () => {
      it('returns `black` font by type', () => {
        expect(getFontIos('black')).toBe('SFProDisplay-Black');
      });

      it('returns `heavy` font by type', () => {
        expect(getFontIos('heavy')).toBe('SFProDisplay-Heavy');
      });

      it('returns `light` font by type', () => {
        expect(getFontIos('light')).toBe('SFProDisplay-Light');
      });

      it('returns `medium` by type', () => {
        expect(getFontIos('medium')).toBe('SFProDisplay-Medium');
      });

      it('returns `regular` font by type', () => {
        expect(getFontIos('regular')).toBe('SFProDisplay-Regular');
      });

      it('returns `semiBold` font by type', () => {
        expect(getFontIos('semiBold')).toBe('SFProDisplay-Semibold');
      });

      it('returns `thin` font by type', () => {
        expect(getFontIos('thin')).toBe('SFProDisplay-Thin');
      });

      it('returns `ultraLight` font by type', () => {
        expect(getFontIos('ultraLight')).toBe('SFProDisplay-Ultralight');
      });

      it('returns `bold` font by type', () => {
        expect(getFontIos('bold')).toBe('SFProText-Bold');
      });
    });
  });
});
