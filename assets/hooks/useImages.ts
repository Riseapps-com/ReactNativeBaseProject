import { useColorScheme } from 'react-native';

import { darkImages, lightImages } from '../images/images';

import type { Images } from '../images/images';

const useImages = (): Images => {
  const colorScheme = useColorScheme();

  return colorScheme === 'dark' ? darkImages : lightImages;
};

export default useImages;
