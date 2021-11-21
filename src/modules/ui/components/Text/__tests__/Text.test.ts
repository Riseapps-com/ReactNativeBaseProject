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
      it('renders with regular font style by default', () => {
        const text = renderText();

        expect(text.getByText(children)).toHaveStyle({ fontFamily: getFont('quicksand-regular') });
      });

      it('renders with regular font style when specified', () => {
        const props: TextProps = { fontStyle: 'regular' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontFamily: getFont('quicksand-regular') });
      });

      it('renders with bold font style when specified', () => {
        const props: TextProps = { fontStyle: 'bold' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontFamily: getFont('quicksand-bold') });
      });
    });

    describe('size', () => {
      it('renders with normal font size by default', () => {
        const text = renderText();

        expect(text.getByText(children)).toHaveStyle({ fontSize: sizes.BASE_FONT_SIZE });
      });

      it('renders with bigger font size when specified', () => {
        const props: TextProps = { size: 'bigger' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontSize: sizes.BIGGER_FONT_SIZE });
      });

      it('renders with biggest font size when specified', () => {
        const props: TextProps = { size: 'biggest' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontSize: sizes.BIGGEST_FONT_SIZE });
      });

      it('renders with normal font size when specified', () => {
        const props: TextProps = { size: 'normal' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontSize: sizes.BASE_FONT_SIZE });
      });

      it('renders with smaller font size when specified', () => {
        const props: TextProps = { size: 'smaller' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontSize: sizes.SMALLER_FONT_SIZE });
      });

      it('renders with smallest font size when specified', () => {
        const props: TextProps = { size: 'smallest' };
        const text = renderText(props);

        expect(text.getByText(children)).toHaveStyle({ fontSize: sizes.SMALLEST_FONT_SIZE });
      });
    });
  });
});
