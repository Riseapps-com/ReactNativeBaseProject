import { SnackbarAction, SnackbarDuration, SnackbarKind } from '~modules/ui';

export type StatusMessageAttributes = {
  message: string;
  kind?: SnackbarKind;
  duration?: SnackbarDuration;
  action?: SnackbarAction;
};
