import React, { useCallback } from 'react';

import { statusMessagesAtom, useRecoilState } from '~modules/state';
import { Snackbar } from '~modules/ui';

const StatusMessage: React.FC = () => {
  const [state, setState] = useRecoilState(statusMessagesAtom);
  const currentStatusMessage = state.statusMessage;
  const isVisible = !!currentStatusMessage?.message;

  const handleDismiss = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      statusMessage: null,
    }));
  }, [setState]);

  const action = currentStatusMessage?.action;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  if (action) action.onPress = action.onPress || (() => {});

  return (
    <Snackbar
      isVisible={isVisible}
      onDismiss={handleDismiss}
      message={currentStatusMessage?.message}
      kind={currentStatusMessage?.kind}
      duration={currentStatusMessage?.duration}
      action={action}
    />
  );
};

export default StatusMessage;
