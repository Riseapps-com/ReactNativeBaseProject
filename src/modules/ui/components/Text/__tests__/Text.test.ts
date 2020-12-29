import { RenderAPI } from '@testing-library/react-native';

import { renderComponent } from '~modules/tests';

import Text, { TextProps } from '../index';

const children = 'Test text';

const defaultProps: TextProps = {
  children,
};

const renderText = (props: TextProps = {}) =>
  renderComponent(Text, { ...defaultProps, ...props }) as RenderAPI;

describe('ui', () => {
  describe('<Text />', () => {
    it('renders with correct text', () => {
      const text = renderText();

      expect(text.getByText(children)).toBeTruthy();
    });
  });
});
