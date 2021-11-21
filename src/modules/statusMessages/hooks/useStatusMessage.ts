import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { statusMessagesState } from '~modules/state';
import { SnackbarAction, SnackbarDuration, SnackbarKind } from '~modules/ui';

import { StatusMessageAttributes } from '../types';

const useStatusMessage = () => {
  const [, setState] = useRecoilState(statusMessagesState);

  const displayStatusMessage = useCallback(
    (
      message: string,
      kind?: SnackbarKind,
      duration?: SnackbarDuration,
      action?: SnackbarAction
    ) => {
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

  return displayStatusMessage;
};

export default useStatusMessage;
