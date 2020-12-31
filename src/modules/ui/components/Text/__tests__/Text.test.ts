import React from 'react';

import { renderComponent } from '~modules/tests';

import Text, { TextProps } from '../index';

const renderText = (props: React.PropsWithChildren<TextProps> = {}) => renderComponent(Text, props);

describe('ui', () => {
  describe('<Text />', () => {
    it('renders text', () => {
      const text = renderText({
        children: 'Hello',
      });

      expect(text.getByText('Hello')).toBeTruthy();
    });
  });
});
