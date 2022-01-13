import React from 'react';

import { getFont } from '~assets';
import { renderComponent } from '~modules/tests';
import { sizes } from '~theme';

import Text, { TextProps } from '../index';

const children = 'Hello world!';
const defaultProps: React.PropsWithChildren<TextProps> = {
  children,
};

const renderText = (props: React.PropsWithChildren<TextProps> = {}) =>
  renderComponent(Text, { ...defaultProps, ...props });

describe('ui', () => {
  describe('<Text />', () => {
    it('renders <Text />', () => {
      const text = renderText();

      expect(text).toMatchSnapshot();
    });

    it('renders with correct text', () => {
      const text = renderText();

      expect(text.getByText(children)).toBeTruthy();
    });

    describe('style', () => {
      it('renders with `regular` font style by default', () => {
        const text = renderText();

        expect(text.getByText(children)).toHaveStyle({ fontFamily: getFont('regular') });
      });

      it('renders with `black` font style when specified', () => {
        const props: TextProps = { fontStyle: 'black' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontFamily: getFont('black') });
      });

      it('renders with `heavy` font style when specified', () => {
        const props: TextProps = { fontStyle: 'heavy' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontFamily: getFont('heavy') });
      });

      it('renders with `light` font style when specified', () => {
        const props: TextProps = { fontStyle: 'light' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontFamily: getFont('light') });
      });

      it('renders with `medium` font style when specified', () => {
        const props: TextProps = { fontStyle: 'medium' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontFamily: getFont('medium') });
      });

      it('renders with `regular` font style when specified', () => {
        const props: TextProps = { fontStyle: 'regular' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontFamily: getFont('regular') });
      });

      it('renders with `semiBold` font style when specified', () => {
        const props: TextProps = { fontStyle: 'semiBold' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontFamily: getFont('semiBold') });
      });

      it('renders with `thin` font style when specified', () => {
        const props: TextProps = { fontStyle: 'thin' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontFamily: getFont('thin') });
      });

      it('renders with ultraLight font style when specified', () => {
        const props: TextProps = { fontStyle: 'ultraLight' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontFamily: getFont('ultraLight') });
      });

      it('renders with bold font style when specified', () => {
        const props: TextProps = { fontStyle: 'bold' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontFamily: getFont('bold') });
      });
    });

    describe('size', () => {
      it('renders with `s` font size by default', () => {
        const text = renderText();

        expect(text.getByText(children)).toHaveStyle({ fontSize: sizes.FONT_SIZE_S });
      });

      it('renders with `xs` font size when specified', () => {
        const props: TextProps = { size: 'xs' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontSize: sizes.FONT_SIZE_XS });
      });

      it('renders with `s` font size when specified', () => {
        const props: TextProps = { size: 's' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontSize: sizes.FONT_SIZE_S });
      });

      it('renders with `m` font size when specified', () => {
        const props: TextProps = { size: 'm' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontSize: sizes.FONT_SIZE_M });
      });

      it('renders with `l` font size when specified', () => {
        const props: TextProps = { size: 'l' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontSize: sizes.FONT_SIZE_L });
      });

      it('renders with `xl` font size when specified', () => {
        const props: TextProps = { size: 'xl' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontSize: sizes.FONT_SIZE_XL });
      });
    });
  });
});
