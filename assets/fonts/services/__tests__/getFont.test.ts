import { getFont } from '~assets';

describe('assets', () => {
  describe('fonts', () => {
    describe('getFont', () => {
      it('returns regular font by type', () => {
        expect(getFont('quicksand-regular')).toBe('Quicksand-Regular');
      });

      it('return bold font by type', () => {
        expect(getFont('quicksand-bold')).toBe('Quicksand-Bold');
      });
    });
  });
});
