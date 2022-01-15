import { fireEvent, RenderAPI } from '@testing-library/react-native';

import { renderComponent } from '~modules/tests';
import { light } from '~theme';

import Button, { ButtonProps } from '../index';

const children = 'Button text';
const onPress = jest.fn();

const defaultProps: ButtonProps = {
  children,
  onPress,
};

const renderButton = (props: Partial<ButtonProps> = {}) =>
  renderComponent(Button, { ...defaultProps, ...props }) as RenderAPI;

describe('ui', () => {
  describe('<Button />', () => {
    it('renders correctly', () => {
      const button = renderButton();

      expect(button).toMatchSnapshot();
    });

    it('renders with correct text', () => {
      const button = renderButton();

      expect(button.getByText(children)).toBeTruthy();
    });

    describe('press', () => {
      afterEach(() => {
        jest.clearAllMocks();
      });

      it('calls provided function', () => {
        const button = renderButton();

        fireEvent.press(button.getByText(children));

        expect(onPress).toBeCalledTimes(1);
      });
    });

    describe('button type', () => {
      it('renders "primary" button by default', () => {
        const button = renderButton();

        expect(button.toJSON()).toHaveStyle({ backgroundColor: light.primary });
      });

      it('renders "primary" button when specified', () => {
        const button = renderButton({ buttonType: 'primary' });

        expect(button.toJSON()).toHaveStyle({ backgroundColor: light.primary });
      });

      it('renders "secondary" button when specified', () => {
        const button = renderButton({ buttonType: 'secondary' });

        expect(button.toJSON()).toHaveStyle({
          backgroundColor: light.accent,
        });
      });

      it('renders "disabled" button when specified', () => {
        const button = renderButton({ isDisabled: true });

        expect(button.toJSON()).toHaveStyle({ backgroundColor: light.disabled });
      });

      it('overrides button style defaults', () => {
        const style = { backgroundColor: 'pink' };
        const customStyleButton = renderButton({ style });

        expect(customStyleButton.toJSON()).toHaveStyle(style);
      });
    });

    describe('text style', () => {
      it('renders light text for default button', () => {
        const button = renderButton();

        expect(button.getByText(children)).toHaveStyle({
          color: light.secondaryText,
        });
      });

      it('renders light text for "primary" button', () => {
        const button = renderButton({ buttonType: 'primary' });

        expect(button.getByText(children)).toHaveStyle({
          color: light.secondaryText,
        });
      });

      it('renders primary text for "secondary" button', () => {
        const button = renderButton({ buttonType: 'secondary' });

        expect(button.getByText(children)).toHaveStyle({
          color: light.secondaryText,
        });
      });

      it('renders disabled text from disabled button', () => {
        const button = renderButton({ isDisabled: true });

        expect(button.getByText(children)).toHaveStyle({ color: light.secondaryText });
      });

      it('overrides button text style defaults', () => {
        const labelStyle = { fontSize: 48, color: 'pink' };
        const customTextButton = renderButton({ labelStyle });

        expect(customTextButton.getByText(children)).toHaveStyle(labelStyle);
      });
    });

    describe('mode', () => {
      it('renders "contained" button by default', () => {
        const button = renderButton();

        expect(button.toJSON()).toHaveStyle({
          backgroundColor: light.primary,
          elevation: 2,
        });
      });

      it('renders specified button mode', () => {
        const textButton = renderButton({ mode: 'text' });

        expect(textButton.toJSON()).toHaveStyle({
          backgroundColor: 'transparent',
          elevation: 0,
        });
      });
    });
  });
});
