import type { LocalCountry } from '../types';
import type { Country, Currencies, Languages } from '~modules/api/countries/types';

export const parseToLocalCapital = (capitals?: string[]): string | undefined => {
  if (!capitals) return undefined;

  return capitals.join(', ');
};

export const parseToLocalCurrencies = (remoteCurrencies?: Currencies): string | undefined => {
  if (!remoteCurrencies) return undefined;

  return Object.values(remoteCurrencies)
    .map(currency => currency.name)
    .join(', ');
};

export const parseToLocalLanguages = (remoteLanguages?: Languages): string | undefined => {
  if (!remoteLanguages) return undefined;

  return Object.values(remoteLanguages)
    .map(language => language)
    .join(', ');
};

export const parseToLocalCountry = (remoteCountry: Country): LocalCountry => {
  return {
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
};

export const parseToLocalCountries = (remoteCountries: Country[]): LocalCountry[] => {
  return remoteCountries.map(parseToLocalCountry);
};
