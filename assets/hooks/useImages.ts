import { useColorScheme } from 'react-native';

import { darkImages, Images, lightImages } from '../images/images';

const useImages = (): Images => {
  const colorScheme = useColorScheme();

  return colorScheme === 'dark' ? darkImages : lightImages;
};

export default useImages;
