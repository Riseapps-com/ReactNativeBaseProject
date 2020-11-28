import { useEffect, useState } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';

import { darkScheme } from '../darkScheme';
import { lightScheme } from '../lightScheme';
import { ColorScheme } from '../types';

const useColors = (): { colors: ColorScheme; colorScheme: ColorSchemeName } => {
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
    colors: colorScheme === 'dark' ? darkScheme : lightScheme,
    colorScheme,
  };
};

export default useColors;
