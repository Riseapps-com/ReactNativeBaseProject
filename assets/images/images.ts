/* eslint-disable global-require */

import { Appearance } from 'react-native';

type Countries = {
  flag: number;
  region: number;
};

type SelectRegionMenu = {
  africa: number;
  americas: number;
  asia: number;
  europe: number;
  oceania: number;
};

export type Images = Countries & SelectRegionMenu;

export const lightImages: Images = {
  flag: require('./countries/flag.png'),
  region: require('./countries/region.png'),
  africa: require('./selectRegionMenu/africa.png'),
  americas: require('./selectRegionMenu/america.png'),
  asia: require('./selectRegionMenu/asia.png'),
  europe: require('./selectRegionMenu/europe.png'),
  oceania: require('./selectRegionMenu/oceania.png'),
};

export const darkImages: Images = {
  flag: require('./countries/flag.png'),
  region: require('./countries/region.png'),
  africa: require('./selectRegionMenu/africa.png'),
  americas: require('./selectRegionMenu/america.png'),
  asia: require('./selectRegionMenu/asia.png'),
  europe: require('./selectRegionMenu/europe.png'),
  oceania: require('./selectRegionMenu/oceania.png'),
};

export const images: Images = Appearance.getColorScheme() === 'dark' ? darkImages : lightImages;
