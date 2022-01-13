import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { statusMessagesAtom } from '~modules/state';
import { SnackbarAction, SnackbarDuration, SnackbarKind } from '~modules/ui';

import { StatusMessageAttributes } from '../types';

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
