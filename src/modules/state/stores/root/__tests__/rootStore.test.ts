import { mocked } from '~modules/tests';

import storeRoot from '../rootStore';

jest.mock('../../countries/countriesStore');

const mockedCountriesStore = mocked(storeRoot.countriesStore);

describe('state', () => {
  describe('root', () => {
    describe('rootStore', () => {
      it('constructor', () => {
        expect(storeRoot.stores).toHaveLength(1);
      });

      it('reset all stores', () => {
        storeRoot.reset();

        expect(mockedCountriesStore.reset).toBeCalledTimes(1);
      });
    });
  });
});
