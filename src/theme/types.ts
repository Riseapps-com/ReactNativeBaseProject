import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type AppearanceProvider<T> = () => T;

export type NamedStyles<T> = {
  [P in keyof T]: ImageStyle | ViewStyle | TextStyle;
};

export type StyleSheetData<N extends string, T, S> = {
  styles: Record<N, S>;
  themes: Record<N, T>;
  appearanceProvider: AppearanceProvider<N>;
};

export type Theme = {
  primary: string;
  accent: string;
  background: string;
  surface: string;
  error: string;
  text: string;
  secondaryText: string;
  separator: string;
  disabled: string;
  placeholder: string;
  backdrop: string;
  notification: string;
};
