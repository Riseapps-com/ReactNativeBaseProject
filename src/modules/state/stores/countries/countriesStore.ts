import { makeAutoObservable } from 'mobx';

import { countriesApi, Country, Region } from '~modules/api';

import { Resettable } from '../../types';
import * as countriesParsers from './countriesParsers';
import { LocalCountry, LocalRegion } from './types';

class CountriesStore implements Resettable {
  allCountries: Country[] = [];

  localAllCountries: LocalCountry[] = [];

  countriesByRegion: Country[] = [];

  localCountriesByRegion: LocalCountry[] = [];

  countryByCode: Country | undefined = undefined;

  localCountryByCode: LocalCountry | undefined = undefined;

  areAllCountriesLoading = false;

  areCountriesByRegionLoading = false;

  isCountryByCodeLoading = false;

  error: string | undefined = undefined;

  region: Region = 'africa';

  constructor() {
    makeAutoObservable(this);
  }

  *getAllCountries() {
    this.areAllCountriesLoading = true;
    this.error = undefined;

    try {
      this.allCountries = yield countriesApi.getAllCountries();
      this.localAllCountries = countriesParsers.parseCountries(this.allCountries);
    } catch (e) {
      this.error = e.message;
    }

    this.areAllCountriesLoading = false;
  }

  *getCountriesByRegion(region: LocalRegion) {
    this.areCountriesByRegionLoading = true;
    this.error = undefined;

    try {
      this.countriesByRegion = yield countriesApi.getCountriesByRegion(region);
      this.localCountriesByRegion = countriesParsers.parseCountries(this.countriesByRegion);
    } catch (e) {
      this.error = e.message;
    }

    this.areCountriesByRegionLoading = false;
  }

  *getCountryDetails(code: string) {
    this.isCountryByCodeLoading = true;
    this.error = undefined;

    try {
      this.countryByCode = yield countriesApi.getCountryByCode(code.toLowerCase());
      this.localCountryByCode = this.countryByCode
        ? countriesParsers.parseCountry(this.countryByCode)
        : undefined;
    } catch (e) {
      this.error = e.message;
    }

    this.isCountryByCodeLoading = false;
  }

  reset(): void {
    this.allCountries = [];
    this.countriesByRegion = [];
    this.countryByCode = undefined;
    this.areAllCountriesLoading = false;
    this.areCountriesByRegionLoading = false;
    this.isCountryByCodeLoading = false;
    this.error = undefined;
    this.region = 'africa';
  }
}

export default CountriesStore;
