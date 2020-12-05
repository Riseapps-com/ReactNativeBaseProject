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
  flag: require('./flag.png'),
  region: require('./region.png'),
  africa: require('./africa.png'),
  americas: require('./america.png'),
  asia: require('./asia.png'),
  europe: require('./europe.png'),
  oceania: require('./oceania.png'),
};

export default images;
