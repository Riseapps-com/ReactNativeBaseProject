import { LocalCountry } from '../types';

const localCountry: Omit<LocalCountry, 'id'> = {
  cca2: 'UA',
  name: 'Ukraine',
  capital: 'Kyiv',
  region: 'Europe',
  subregion: 'Eastern Europe',
  population: '44,134,693',
  flagLink: 'https://flagcdn.com/w320/ua.png',
  currencies: 'Ukrainian hryvnia',
  languages: 'Ukrainian',
};

export { localCountry };
