import { fireEvent } from '@testing-library/react-native';

import { useRecoilState } from '~modules/state';
import { mocked, renderComponent } from '~modules/tests';

import StatusMessage from '../index';

import type { StatusMessageAttributes } from '../../../types';

jest.mock('~modules/state');

const mockedUseRecoilState = mocked(useRecoilState);

const renderStatusMessage = () => renderComponent(StatusMessage);

beforeAll(() => {
  global.requestAnimationFrame = jest.fn();
  global.cancelAnimationFrame = jest.fn();
});

describe('statusMessages', () => {
  describe('<StatusMessage />', () => {
    it('shows <Snackbar /> if it is visible', () => {
      const mockedSetState = jest.fn();
      const statusMessage: StatusMessageAttributes = {
        message: 'Test message',
        kind: 'error',
        duration: 1500,
      };

      mockedUseRecoilState.mockImplementation(() => [{ statusMessage }, mockedSetState]);

      const statusMessageComponent = renderStatusMessage();

      jest.runAllTimers();

      expect(statusMessageComponent.getByText(statusMessage.message)).toBeTruthy();
      expect(statusMessageComponent.UNSAFE_getByProps({ isVisible: true })).toBeTruthy();
    });

    it('hides <Snackbar /> if it is not visible', () => {
      const mockedSetState = jest.fn();

      mockedUseRecoilState.mockImplementation(() => [{}, mockedSetState]);

      const statusMessageComponent = renderStatusMessage();

      jest.runAllTimers();
      expect(statusMessageComponent.UNSAFE_getByProps({ isVisible: false })).toBeTruthy();
    });

    it('handles dismiss', () => {
      const mockedSetState = jest.fn();
      const statusMessage: StatusMessageAttributes = {
        message: 'Test message',
        kind: 'error',
        duration: 1500,
        action: { label: 'Test label', onPress: jest.fn() },
      };

      mockedUseRecoilState.mockImplementation(() => [{ statusMessage }, mockedSetState]);

      const statusMessageComponent = renderStatusMessage();

      jest.runAllTimers();

      fireEvent.press(statusMessageComponent.getByText('Test label'));

      expect(mockedSetState).toBeCalledTimes(1);
    });
  });
});
