import { country } from '~modules/api/__data__/country';

import { localCountry } from '../../../__data__/localCountry';
import * as countriesParsers from '../countriesParsers';

describe('state', () => {
  describe('countries', () => {
    describe('countriesParsers', () => {
      describe('parseToLocalCountry', () => {
        it('parses to local country', () => {
          const { id, ...restCountry } = countriesParsers.parseToLocalCountry(country);

          expect(restCountry).toEqual(localCountry);
        });
      });

      describe('parseToLocalCountries', () => {
        it('parses to local countries', () => {
          const [{ id, ...restCountry }] = countriesParsers.parseToLocalCountries([country]);

          expect([restCountry]).toEqual([localCountry]);
        });
      });
    });
  });
});
