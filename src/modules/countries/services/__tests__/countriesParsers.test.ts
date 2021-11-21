import { country } from '~modules/api/countries/__data__';

import { localCountry } from '../../__data__';
import * as countriesParsers from '../countriesParsers';

describe('countries', () => {
  describe('countriesParsers', () => {
    describe('parseToLocalCapital', () => {
      it('returns undefined if remote capitals are not defined', () => {
        const result = countriesParsers.parseToLocalCapital();

        expect(result).toBeUndefined();
      });

      it('parses to local capital', () => {
        const result = countriesParsers.parseToLocalCapital(['capital1', 'capital2']);

        expect(result).toEqual('capital1, capital2');
      });
    });

    describe('parseToLocalCurrencies', () => {
      it('returns undefined if remote currencies are not defined', () => {
        const result = countriesParsers.parseToLocalCurrencies();

        expect(result).toBeUndefined();
      });

      it('parses to local currencies', () => {
        const result = countriesParsers.parseToLocalCurrencies({
          currency1: { name: 'currency1', symbol: 'symbol1' },
          currency2: { name: 'currency2', symbol: 'symbol2' },
        });

        expect(result).toEqual('currency1, currency2');
      });
    });

    describe('parseToLocalLanguages', () => {
      it('returns undefined if remote languages are not defined', () => {
        const result = countriesParsers.parseToLocalLanguages();

        expect(result).toBeUndefined();
      });

      it('parses to local languages', () => {
        const result = countriesParsers.parseToLocalLanguages({
          language1: 'language1',
          language2: 'language2',
        });

        expect(result).toEqual('language1, language2');
      });
    });

    describe('parseToLocalCountry', () => {
      it('parses to local country', () => {
        const result = countriesParsers.parseToLocalCountry(country);

        expect(result).toEqual(localCountry);
      });
    });

    describe('parseToLocalCountries', () => {
      it('parses to local countries', () => {
        const result = countriesParsers.parseToLocalCountries([country]);

        expect(result).toEqual([localCountry]);
      });
    });
  });
});
