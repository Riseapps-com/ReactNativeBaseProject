import type { SnackbarAction, SnackbarDuration, SnackbarKind } from '~modules/ui/types';

export type StatusMessageAttributes = {
  message: string;
  kind?: SnackbarKind;
  duration?: SnackbarDuration;
  action?: SnackbarAction;
};
