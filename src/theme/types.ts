import { ColorValue, ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type AppearanceProvider<T> = () => T;

export type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export type StyleSheetData<N extends string, T, S> = {
  styles: Record<N, S>;
  themes: Record<N, T>;
  appearanceProvider: AppearanceProvider<N>;
};

export type Theme = {
  primary: ColorValue;
  accent: ColorValue;
  background: ColorValue;
  surface: ColorValue;
  error: ColorValue;
  text: ColorValue;
  secondaryText: ColorValue;
  disabled: ColorValue;
  placeholder: ColorValue;
  backdrop: ColorValue;
  notification: ColorValue;
};
