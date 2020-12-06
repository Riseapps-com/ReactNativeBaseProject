import { FlagHeight } from '../types';

export const getCountryFlag = (code: string, flagHeight: FlagHeight) =>
  `https://flagcdn.com/${flagHeight}/${code.toLowerCase()}.png`;
