import { configure } from 'mobx';

import { Resettable } from '../../types';
import CountriesStore from '../countries/countriesStore';

configure({ useProxies: 'never', enforceActions: 'never' });

class StoreRoot {
  countriesStore = new CountriesStore();

  stores: Resettable[] = [this.countriesStore];

  reset(): void {
    this.stores.forEach(store => store.reset());
  }
}

const storeRoot = new StoreRoot();

export default storeRoot;
