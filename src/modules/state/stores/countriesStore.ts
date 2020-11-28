import { makeAutoObservable } from 'mobx';

import { countriesApi, Country, Region } from '~modules/api';
import { countriesParsers } from '~modules/countries';

import { Resettable } from '../types';

class CountriesStore implements Resettable {
  allCountries: Country[] = [];

  countriesByRegion: Country[] = [];

  countryByCode: Country | undefined = undefined;

  loading = false;

  error: string | undefined = undefined;

  region: Region = 'africa';

  constructor() {
    makeAutoObservable(this);
  }

  *getAllCountries() {
    this.loading = true;
    this.error = undefined;

    try {
      this.allCountries = yield countriesApi.getAllCountries();
    } catch (e) {
      this.error = e.message;
    }

    this.loading = false;
  }

  *getCountriesByRegion(region: Region) {
    this.loading = true;
    this.error = undefined;

    try {
      this.countriesByRegion = yield countriesApi.getCountriesByRegion(region);
    } catch (e) {
      this.error = e.message;
    }

    this.loading = false;
  }

  *getCountryDetails(code: string) {
    this.loading = true;
    this.error = undefined;

    try {
      this.countryByCode = yield countriesApi.getCountryByCode(code);
    } catch (e) {
      this.error = e.message;
    }

    this.loading = false;
  }

  get localAllCountries() {
    return countriesParsers.parseCountries(this.allCountries);
  }

  get localCountriesByRegion() {
    return countriesParsers.parseCountries(this.countriesByRegion);
  }

  get localCountryDetails() {
    return this.countryByCode ? countriesParsers.parseCountry(this.countryByCode) : undefined;
  }

  reset(): void {
    this.allCountries = [];
    this.countriesByRegion = [];
    this.countryByCode = undefined;
    this.loading = false;
    this.error = undefined;
    this.region = 'africa';
  }
}

export default CountriesStore;
