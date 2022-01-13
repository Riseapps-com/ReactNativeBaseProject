import { Font } from '~assets';

// Text
export type TextFontStyle = Font;
export type TextSize = 'xs' | 's' | 'm' | 'l' | 'xl';

// Snackbar
export type SnackbarKind = 'info' | 'success' | 'error';
export type SnackbarDuration = 1500 | 2750;
export type SnackbarAction = {
  label: string;
  onPress: () => void;
};

// Button
export type ButtonType = 'primary' | 'secondary';
export type ButtonTextType = 'textPrimary' | 'textSecondary';
