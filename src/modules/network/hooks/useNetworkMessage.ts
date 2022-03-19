import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { netInfoAtom, useRecoilState } from '~modules/state';
import { useStatusMessage } from '~modules/statusMessages';

const useNetworkMessage = (): void => {
  const { t } = useTranslation();
  const displayStatusMessage = useStatusMessage();
  const [netInfoState, setNetInfoState] = useRecoilState(netInfoAtom);
  const { netInfo } = netInfoState;

  useEffect(() => {
    if (!netInfo) return;

    const isOnline = netInfo.isConnected && netInfo.isInternetReachable;

    if (isOnline) {
      setNetInfoState(prevState => ({ ...prevState, netInfo: null }));
    } else {
      displayStatusMessage(t('offlineMessage'), 'info', Number.POSITIVE_INFINITY, { label: t('ok') });
    }
  }, [displayStatusMessage, netInfo, setNetInfoState, t]);
};

export default useNetworkMessage;
