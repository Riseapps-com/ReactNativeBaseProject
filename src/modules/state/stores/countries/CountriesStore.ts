import { makeAutoObservable } from 'mobx';

import { countriesApi, Country } from '~modules/api';
import { dataTransformUtilities } from '~modules/dataTransforms';

import { Resettable } from '../../types';
import * as countriesParsers from './countriesParsers';
import { LocalCountry, LocalRegion } from './types';

class CountriesStore implements Resettable {
  localAllCountries: LocalCountry[] = [];

  localCountriesByRegion: LocalCountry[] = [];

  localCountryByCode: LocalCountry | undefined = undefined;

  areAllCountriesLoading = false;

  areCountriesByRegionLoading = false;

  isCountryByCodeLoading = false;

  allCountriesError: string | undefined = undefined;

  countriesByRegionError: string | undefined = undefined;

  countryByCodeError: string | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  *getAllCountries() {
    this.areAllCountriesLoading = true;
    this.allCountriesError = undefined;

    try {
      this.localAllCountries = countriesParsers
        .parseToLocalCountries(yield countriesApi.getAllCountries())
        .sort(dataTransformUtilities.comparator('name'));
    } catch (e: any) {
      this.allCountriesError = e.message;
    }

    this.areAllCountriesLoading = false;
  }

  resetAllCountries() {
    this.localAllCountries = [];
    this.allCountriesError = undefined;
  }

  *getCountriesByRegion(region: LocalRegion) {
    this.areCountriesByRegionLoading = true;
    this.countriesByRegionError = undefined;

    try {
      this.localCountriesByRegion = countriesParsers
        .parseToLocalCountries(yield countriesApi.getCountriesByRegion(region))
        .sort(dataTransformUtilities.comparator('name'));
    } catch (e: any) {
      this.countriesByRegionError = e.message;
    }

    this.areCountriesByRegionLoading = false;
  }

  resetCountriesByRegion() {
    this.localCountriesByRegion = [];
    this.countriesByRegionError = undefined;
  }

  *getCountryByCode(code: string) {
    this.isCountryByCodeLoading = true;
    this.countryByCodeError = undefined;

    try {
      const countryByCode: Country[] = yield countriesApi.getCountryByCode(code.toLowerCase());

      this.localCountryByCode = countryByCode[0]
        ? countriesParsers.parseToLocalCountry(countryByCode[0])
        : undefined;
    } catch (e: any) {
      this.countryByCodeError = e.message;
    }

    this.isCountryByCodeLoading = false;
  }

  resetCountryByCode() {
    this.localCountryByCode = undefined;
    this.countryByCodeError = undefined;
  }

  reset(): void {
    this.areAllCountriesLoading = false;
    this.areCountriesByRegionLoading = false;
    this.isCountryByCodeLoading = false;
    this.allCountriesError = undefined;
    this.countriesByRegionError = undefined;
    this.countryByCodeError = undefined;
  }
}

export default CountriesStore;
