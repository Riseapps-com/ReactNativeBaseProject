import { renderComponent } from '~modules/tests';

import LocalImage from '../index';

import type { LocalImageProps } from '../index';

const renderLocalImage = (props: LocalImageProps) => renderComponent(LocalImage, props);

describe('ui', () => {
  describe('<LocalImage />', () => {
    it('renders <LocalImage />', () => {
      const localImage = renderLocalImage({
        source: 'flag',
      });

      expect(localImage.getByLabelText('flag')).toBeTruthy();
      expect(localImage).toMatchSnapshot();
    });

    it('renders custom width and height', () => {
      const localImage = renderLocalImage({
        source: 'flag',
        width: 100,
        height: 200,
      });

      expect(localImage.getByLabelText('flag')).toHaveStyle({ width: 100, height: 200 });
    });
  });
});
