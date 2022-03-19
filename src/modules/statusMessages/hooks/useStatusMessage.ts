import { useCallback } from 'react';

import { statusMessagesAtom, useRecoilState } from '~modules/state';

import type { StatusMessageAttributes } from '../types';
import type { SnackbarAction, SnackbarDuration, SnackbarKind } from '~modules/ui/types';

const useStatusMessage = (): ((
  message: string,
  kind?: SnackbarKind,
  duration?: SnackbarDuration,
  action?: SnackbarAction
) => void) => {
  const [, setState] = useRecoilState(statusMessagesAtom);

  return useCallback(
    (message: string, kind?: SnackbarKind, duration?: SnackbarDuration, action?: SnackbarAction) => {
      const statusMessage: StatusMessageAttributes = {
        message,
        kind,
        duration,
        action,
      };

      setState(prevState => ({ ...prevState, statusMessage }));
    },
    [setState]
  );
};

export default useStatusMessage;
