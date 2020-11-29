import { RuntimeError } from '~modules/errors';

import { NamedStyles, StyleSheetData } from '../types';

const useTheme = <T, N extends string, S extends NamedStyles<S> | NamedStyles<any>>(
  data: StyleSheetData<N, T, S>,
  name?: N
): [NamedStyles<S>, T, N] => {
  const resolvedName = name || data.appearanceProvider();
  const theme = data.themes[resolvedName];

  if (!theme) {
    throw new RuntimeError('ThemeNotDefinedException', `Theme not defined: ${resolvedName}.`);
  }

  const styles = data.styles[resolvedName];

  return [styles, theme, resolvedName];
};

export default useTheme;
