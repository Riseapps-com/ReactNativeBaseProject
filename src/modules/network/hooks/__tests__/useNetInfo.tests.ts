import { addEventListener } from '@react-native-community/netinfo';
import { renderHook } from '@testing-library/react-hooks';

import { useRecoilState } from '~modules/state';
import { mocked } from '~modules/tests';

import useNetInfo from '../useNetInfo';

jest.mock('~modules/state');

const mockedAddEventListener = mocked(addEventListener);
const mockedUseRecoilState = mocked(useRecoilState);

describe('network', () => {
  describe('useNetInfo', () => {
    it('calls addEventListener', async () => {
      mockedUseRecoilState.mockImplementation(() => [undefined, jest.fn()]);

      renderHook(() => useNetInfo());

      expect(mockedAddEventListener).toBeCalledTimes(1);
    });
  });
});
