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

  allCountriesError: string | undefined = undefined;

  countriesByRegionError: string | undefined = undefined;

  countryByCodeError: string | undefined = undefined;

  region: Region = 'africa';

  constructor() {
    makeAutoObservable(this);
  }

  *getAllCountries() {
    this.areAllCountriesLoading = true;
    this.allCountriesError = undefined;

    try {
      this.allCountries = yield countriesApi.getAllCountries();
      this.localAllCountries = countriesParsers.parseCountries(this.allCountries);
    } catch (e) {
      this.allCountriesError = e.message;
    }

    this.areAllCountriesLoading = false;
  }

  resetAllCountries() {
    this.allCountries = [];
    this.localAllCountries = [];
    this.allCountriesError = undefined;
  }

  *getCountriesByRegion(region: LocalRegion) {
    this.areCountriesByRegionLoading = true;
    this.countriesByRegionError = undefined;

    try {
      this.countriesByRegion = yield countriesApi.getCountriesByRegion(region);
      this.localCountriesByRegion = countriesParsers.parseCountries(this.countriesByRegion);
    } catch (e) {
      this.countriesByRegionError = e.message;
    }

    this.areCountriesByRegionLoading = false;
  }

  resetCountriesByRegion() {
    this.countriesByRegion = [];
    this.localCountriesByRegion = [];
    this.countriesByRegionError = undefined;
  }

  *getCountryByCode(code: string) {
    this.isCountryByCodeLoading = true;
    this.countryByCodeError = undefined;

    try {
      this.countryByCode = yield countriesApi.getCountryByCode(code.toLowerCase());
      this.localCountryByCode = this.countryByCode
        ? countriesParsers.parseCountry(this.countryByCode)
        : undefined;
    } catch (e) {
      this.countryByCodeError = e.message;
    }

    this.isCountryByCodeLoading = false;
  }

  resetCountryByCode() {
    this.countryByCode = undefined;
    this.localCountryByCode = undefined;
    this.countryByCodeError = undefined;
  }

  reset(): void {
    this.allCountries = [];
    this.countriesByRegion = [];
    this.countryByCode = undefined;
    this.areAllCountriesLoading = false;
    this.areCountriesByRegionLoading = false;
    this.isCountryByCodeLoading = false;
    this.allCountriesError = undefined;
    this.countriesByRegionError = undefined;
    this.countryByCodeError = undefined;
    this.region = 'africa';
  }
}

export default CountriesStore;
