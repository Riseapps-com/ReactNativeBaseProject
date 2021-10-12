import { v4 } from 'uuid';

import { Country, Currencies, Languages } from '~modules/api';

import { LocalCountry } from './types';

export const parseToLocalCapital = (capitals?: string[]) => {
  if (!capitals) return undefined;

  const capital = capitals.join(', ');

  return capital;
};

export const parseToLocalCurrencies = (remoteCurrencies?: Currencies) => {
  if (!remoteCurrencies) return undefined;

  const currencies = Object.values(remoteCurrencies)
    .map(currency => currency.name)
    .join(', ');

  return currencies;
};

export const parseToLocalLanguages = (remoteLanguages?: Languages) => {
  if (!remoteLanguages) return undefined;

  const languages = Object.values(remoteLanguages)
    .map(language => language)
    .join(', ');

  return languages;
};

export const parseToLocalCountry = (remoteCountry: Country) => {
  const country: LocalCountry = {
    id: v4(),
    cca2: remoteCountry.cca2,
    name: remoteCountry.name.common,
    capital: parseToLocalCapital(remoteCountry.capital),
    region: remoteCountry.region,
    subregion: remoteCountry.subregion,
    population: remoteCountry.population.toLocaleString(),
    flagLink: remoteCountry.flags.png,
    currencies: parseToLocalCurrencies(remoteCountry.currencies),
    languages: parseToLocalLanguages(remoteCountry.languages),
  };

  return country;
};

export const parseToLocalCountries = (remoteCountries: Country[]) => {
  const countries = remoteCountries.map(parseToLocalCountry);

  return countries;
};
