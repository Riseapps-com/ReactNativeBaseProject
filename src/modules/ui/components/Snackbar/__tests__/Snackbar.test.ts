import { fireEvent } from '@testing-library/react-native';

import { renderComponent } from '~modules/tests';
import { light } from '~theme';

import Snackbar from '../index';

import type { SnackbarProps } from '../index';

const renderSnackbar = (props: SnackbarProps) => renderComponent(Snackbar, props);

beforeAll(() => {
  global.requestAnimationFrame = jest.fn();
  global.cancelAnimationFrame = jest.fn();
});

describe('ui', () => {
  describe('<Snackbar />', () => {
    it('renders <Snackbar />', () => {
      const snackbar = renderSnackbar({
        isVisible: true,
        message: 'message',
        onDismiss: jest.fn(),
      });

      expect(snackbar).toMatchSnapshot();
      // TODO: Revert this as soon as this issue is fixed
      // https://github.com/callstack/react-native-testing-library/issues/776
      expect(snackbar.getAllByText('message').length).toBeTruthy();
    });

    it('handles dismiss', () => {
      const onDismiss = jest.fn();
      const onPress = jest.fn();

      const snackbar = renderSnackbar({
        isVisible: true,
        message: 'message',
        onDismiss,
        action: {
          label: 'action',
          onPress,
        },
      });

      fireEvent.press(snackbar.getByText('action'));

      expect(onPress).toBeCalledTimes(1);
      expect(onDismiss).toBeCalledTimes(1);
    });

    describe('styles', () => {
      it('renders `info` kind', () => {
        const snackbar = renderSnackbar({
          isVisible: true,
          onDismiss: jest.fn(),
          kind: 'info',
        });

        expect(snackbar.UNSAFE_queryByProps({ visible: true })).toHaveStyle({
          backgroundColor: light.accent,
        });
      });

      it('renders `success` kind', () => {
        const snackbar = renderSnackbar({
          isVisible: true,
          onDismiss: jest.fn(),
          kind: 'success',
        });

        expect(snackbar.UNSAFE_queryByProps({ visible: true })).toHaveStyle({
          backgroundColor: light.primary,
        });
      });

      it('renders `error` kind', () => {
        const snackbar = renderSnackbar({
          isVisible: true,
          onDismiss: jest.fn(),
          kind: 'error',
        });

        expect(snackbar.UNSAFE_queryByProps({ visible: true })).toHaveStyle({
          backgroundColor: light.error,
        });
      });
    });
  });
});
