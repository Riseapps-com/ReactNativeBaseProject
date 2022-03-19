import { renderHook } from '@testing-library/react-hooks';

import { useRecoilState } from '~modules/state';
import { mocked } from '~modules/tests';

import useStatusMessage from '../useStatusMessage';

jest.mock('~modules/state');

const mockedUseRecoilState = mocked(useRecoilState);

describe('statusMessages', () => {
  describe('useStatusMessage', () => {
    it('sets recoil state', () => {
      const mockedSetState = jest.fn();
      const message = 'Test message';
      const kind = 'error';
      const duration = 1500;

      mockedUseRecoilState.mockImplementation(() => [undefined, mockedSetState]);

      const { result } = renderHook(() => useStatusMessage());

      result.current(message, kind, duration);

      expect(mockedSetState).toBeCalledTimes(1);
    });
  });
});
