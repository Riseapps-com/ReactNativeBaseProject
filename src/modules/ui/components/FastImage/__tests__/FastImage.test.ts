import { images } from '~assets';
import { renderComponent } from '~modules/tests';

import FastImage, { FastImageProps } from '../index';

const defaultProps: FastImageProps = {
  source: images.americas,
};

const renderFastImage = () => renderComponent(FastImage, defaultProps);

describe('ui', () => {
  describe('<FastImage />', () => {
    it('renders <FastImage />', () => {
      const fastImage = renderFastImage();

      expect(fastImage).toMatchSnapshot();
    });
  });
});
