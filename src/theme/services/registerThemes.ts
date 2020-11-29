import { AppearanceProvider, NamedStyles, StyleSheetData } from '../types';

const registerThemes = <N extends string, T, R extends N>(
  themes: Record<N, T>,
  appearanceProvider: AppearanceProvider<R>
) => {
  return <S extends NamedStyles<S> | NamedStyles<any>>(
    fn: (theme: T) => S
  ): StyleSheetData<N, T, S> => {
    const styles: Record<string, any> = {};

    Object.entries(themes).forEach(entry => {
      const name = entry[0];
      const theme = entry[1];

      styles[name] = fn(theme as T);
    });

    return { styles, themes, appearanceProvider };
  };
};

export default registerThemes;
