import { renderComponent } from '~modules/tests';

import RemoteImage from '../index';

import type { RemoteImageProps } from '../index';

const renderRemoteImage = (props: RemoteImageProps) => renderComponent(RemoteImage, props);

describe('ui', () => {
  describe('<RemoteImage />', () => {
    it('renders <LocalImage />', () => {
      const remoteImage = renderRemoteImage({
        source: 'https://testImage.com',
      });

      expect(remoteImage.getByLabelText('https://testImage.com')).toBeTruthy();
      expect(remoteImage).toMatchSnapshot();
    });

    it('renders custom width and height', () => {
      const remoteImage = renderRemoteImage({
        source: 'https://testImage.com',
        width: 100,
        height: 200,
      });

      expect(remoteImage.getByLabelText('https://testImage.com')).toHaveStyle({ width: 100, height: 200 });
    });
  });
});
