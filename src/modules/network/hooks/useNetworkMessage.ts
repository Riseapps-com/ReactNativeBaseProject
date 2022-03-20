import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { netInfoAtom, statusMessagesAtom, useRecoilState } from '~modules/state';
import { useStatusMessage } from '~modules/statusMessages';

const useNetworkMessage = (): void => {
  const { t } = useTranslation();
  const displayStatusMessage = useStatusMessage();
  const [netInfoState] = useRecoilState(netInfoAtom);
  const [, setStatusMessagesState] = useRecoilState(statusMessagesAtom);
  const { netInfo } = netInfoState;

  useEffect(() => {
    if (!netInfo) return;

    const isOnline = netInfo.isConnected && netInfo.isInternetReachable;

    if (isOnline) {
      setStatusMessagesState(prevState => ({ ...prevState, statusMessage: null }));
    } else {
      displayStatusMessage(t('network.offlineMessage'), 'info', Number.POSITIVE_INFINITY, { label: t('network.ok') });
    }
  }, [displayStatusMessage, netInfo, setStatusMessagesState, t]);
};

export default useNetworkMessage;
