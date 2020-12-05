import { StyleSheetData } from '../types';

const useTheme = <T, N extends string, S>(data: StyleSheetData<N, T, S>, name?: N): [S, T, N] => {
  const resolvedName = name || data.appearanceProvider();
  const theme = data.themes[resolvedName];

  const styles = data.styles[resolvedName];

  return [styles, theme, resolvedName];
};

export default useTheme;
