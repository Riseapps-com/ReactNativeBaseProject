import { renderHook } from '@testing-library/react-hooks';

import { I18n } from '~modules/localization';
import { useRecoilState } from '~modules/state';
import { useStatusMessage } from '~modules/statusMessages';
import { mocked } from '~modules/tests';

import useNetworkMessage from '../useNetworkMessage';

jest.mock('~modules/state');
jest.mock('~modules/statusMessages');

const mockedUseRecoilState = mocked(useRecoilState);
const mockedUseStatusMessage = mocked(useStatusMessage);
const mockedDisplayStatusMessage = jest.fn();

describe('network', () => {
  describe('useNetworkMessage', () => {
    it('does nothing if netInfo is specified', () => {
      const mockedSetState = jest.fn();

      mockedUseRecoilState.mockImplementation(() => [{}, mockedSetState]);
      renderHook(() => useNetworkMessage());

      expect(mockedDisplayStatusMessage).toBeCalledTimes(0);
      expect(mockedSetState).toBeCalledTimes(0);
    });

    it('displays status bar if it is offline', () => {
      const mockedSetState = jest.fn();

      mockedUseRecoilState.mockImplementation(() => [{ netInfo: { isConnected: false } }, mockedSetState]);
      mockedUseStatusMessage.mockImplementation(() => mockedDisplayStatusMessage);

      renderHook(() => useNetworkMessage());

      expect(mockedDisplayStatusMessage).toBeCalledTimes(1);
      expect(mockedDisplayStatusMessage).toBeCalledWith(
        I18n.t('network.offlineMessage'),
        'info',
        Number.POSITIVE_INFINITY,
        {
          label: I18n.t('network.ok'),
        }
      );
    });

    it('hides status bar if is online', async () => {
      const mockedSetState = jest.fn();

      mockedUseRecoilState.mockImplementation(() => [
        { netInfo: { isConnected: true, isInternetReachable: true } },
        mockedSetState,
      ]);
      mockedUseStatusMessage.mockImplementation(() => mockedDisplayStatusMessage);

      renderHook(() => useNetworkMessage());

      expect(mockedSetState).toBeCalledTimes(1);
    });
  });
});
