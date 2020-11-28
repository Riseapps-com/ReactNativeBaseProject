import { useEffect, useState } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';

import { darkScheme } from '../darkScheme';
import { lightScheme } from '../lightScheme';

const useTheme = (): { colorScheme: ColorSchemeName; colors: Record<string, any> } => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(Appearance.getColorScheme());

  useEffect(() => {
    const appearanceListener = (preferences: Appearance.AppearancePreferences) =>
      setColorScheme(preferences.colorScheme);

    Appearance.addChangeListener(appearanceListener);

    return () => {
      Appearance.removeChangeListener(appearanceListener);
    };
  }, []);

  return {
    colorScheme,
    colors: colorScheme === 'dark' ? darkScheme : lightScheme,
  };
};

export default useTheme;
