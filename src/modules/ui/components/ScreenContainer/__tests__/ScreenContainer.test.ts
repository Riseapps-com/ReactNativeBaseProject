import { renderComponent } from '~modules/tests';

import ScreenContainer, { ScreenContainerProps } from '../index';

const renderScreenContainer = (props: ScreenContainerProps = {}) => renderComponent(ScreenContainer, props);

describe('ui', () => {
  describe('<ScreenContainer />', () => {
    it('renders <ScreenContainer />', () => {
      const screenContainer = renderScreenContainer();

      expect(screenContainer.getByA11yLabel('Screen container')).toBeTruthy();
      expect(screenContainer).toMatchSnapshot();
    });

    describe('safe area', () => {
      it('renders top margin if it is specified', () => {
        const screenContainer = renderScreenContainer({
          withSafeTopMargin: true,
        });

        expect(screenContainer.getByA11yLabel('Screen container')).toHaveStyle({
          marginTop: 8,
        });
      });

      it('renders bottom margin if it is specified', () => {
        const screenContainer = renderScreenContainer({
          withSafeBottomMargin: true,
        });

        expect(screenContainer.getByA11yLabel('Screen container')).toHaveStyle({
          marginBottom: 16,
        });
      });

      it('renders left margin if it is specified', () => {
        const screenContainer = renderScreenContainer({
          withSafeLeftMargin: true,
        });

        expect(screenContainer.getByA11yLabel('Screen container')).toHaveStyle({
          marginStart: 24,
        });
      });

      it('renders right margin if it is specified', () => {
        const screenContainer = renderScreenContainer({
          withSafeRightMargin: true,
        });

        expect(screenContainer.getByA11yLabel('Screen container')).toHaveStyle({
          marginEnd: 32,
        });
      });
    });
  });
});
