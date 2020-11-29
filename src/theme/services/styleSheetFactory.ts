import { useColorScheme } from 'react-native';

import { dark, light, themes } from '../config';
import registerThemes from './registerThemes';

const styleSheetFactory = registerThemes({ light, dark }, () => {
  const colorScheme = useColorScheme();

  return colorScheme && themes.includes(colorScheme) ? colorScheme : 'light';
});

export default styleSheetFactory;
