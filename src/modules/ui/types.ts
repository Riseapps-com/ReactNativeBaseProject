// Text
export type TextFontStyle = 'light' | 'regular' | 'bold';
export type TextSize = 'smaller' | 'smallest' | 'normal' | 'bigger' | 'biggest';

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
