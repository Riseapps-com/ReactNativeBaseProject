import { renderComponent } from '~modules/tests';

import ActivityIndicator from '../index';

const renderActivityIndicator = () => renderComponent(ActivityIndicator);

describe('ui', () => {
  describe('<ActivityIndicator />', () => {
    it('renders correctly', () => {
      const activityIndicator = renderActivityIndicator();

      expect(activityIndicator).toMatchSnapshot();
    });
  });
});
