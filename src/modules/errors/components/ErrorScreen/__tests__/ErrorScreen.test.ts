import { fireEvent, RenderAPI } from '@testing-library/react-native';

import { I18n } from '~modules/localization';
import { renderComponent } from '~modules/tests';

import ErrorScreen from '../index';

describe('errors', () => {
  describe('<ErrorScreen />', () => {
    it('should render correctly', () => {
      const errorScreen: RenderAPI = renderComponent(ErrorScreen);

      expect(errorScreen).toMatchSnapshot();
    });

    it('calls provided function on dismiss', () => {
      const onDismiss = jest.fn();
      const errorScreen: RenderAPI = renderComponent(ErrorScreen, { onDismiss });

      fireEvent.press(errorScreen.getByText(I18n.t('errors.dismiss')));

      expect(onDismiss).toBeCalledTimes(1);
    });
  });
});
