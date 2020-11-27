/* eslint-disable global-require */

type Images = {
  flag: number;
  region: number;
  africa: number;
  americas: number;
  asia: number;
  europe: number;
  oceania: number;
};

const images: Images = {
  flag: require('./flag/flag.png'),
  region: require('./region/region.png'),
  africa: require('./africa/africa.png'),
  americas: require('./america/america.png'),
  asia: require('./asia/asia.png'),
  europe: require('./europe/europe.png'),
  oceania: require('./oceania/oceania.png'),
};

export default images;
