import { I18n } from '~modules/localization';
import { renderComponent } from '~modules/tests';
import { colors } from '~theme';

import Error from '../index';

const renderError = () => renderComponent(Error);

describe('ui', () => {
  describe('<Error />', () => {
    it('renders error correctly', () => {
      const error = renderError();

      expect(error).toMatchSnapshot();
    });

    it('renders error with correct title and style', () => {
      const error = renderError();

      expect(error.getByText(I18n.t('errorBoundaryTitle'))).toBeTruthy();
      expect(error.getByText(I18n.t('errorBoundaryTitle'))).toHaveStyle({
        color: colors.SUNSET_ORANGE,
      });
    });
  });
});
