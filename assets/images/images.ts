/* eslint-disable global-require */

import { Appearance } from 'react-native';

export type Images = {
  flag: number;
  region: number;
  africa: number;
  americas: number;
  asia: number;
  europe: number;
  oceania: number;
};

export const lightImages: Images = {
  flag: require('./flag.png'),
  region: require('./region.png'),
  africa: require('./africa.png'),
  americas: require('./america.png'),
  asia: require('./asia.png'),
  europe: require('./europe.png'),
  oceania: require('./oceania.png'),
};

export const darkImages: Images = {
  flag: require('./flag.png'),
  region: require('./region.png'),
  africa: require('./africa.png'),
  americas: require('./america.png'),
  asia: require('./asia.png'),
  europe: require('./europe.png'),
  oceania: require('./oceania.png'),
};

export const images: Images = Appearance.getColorScheme() === 'dark' ? darkImages : lightImages;
