import { FlagHeight } from '../../types';
import * as countriesUtils from '../countriesUtils';

describe('countries', () => {
  describe('countriesUtils', () => {
    describe('getCountryFlag', () => {
      it('returns correct url', () => {
        const code = 'ck';
        const flagHeight: FlagHeight = 'h120';

        const url = countriesUtils.getCountryFlag(code, flagHeight);

        expect(url).toEqual(`https://flagcdn.com/${flagHeight}/${code.toLowerCase()}.png`);
      });
    });
  });
});
