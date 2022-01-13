import { fireEvent } from '@testing-library/react-native';

import { images } from '~assets';
import { renderComponent } from '~modules/tests';

import MenuItem, { MenuItemProps } from '../index';

const renderMenuItem = (props: MenuItemProps) => renderComponent(MenuItem, props);

describe('countries', () => {
  describe('<MenuItem />', () => {
    it('renders <MenuItem />', () => {
      const title = 'Title';
      const menuItem = renderMenuItem({
        image: images.africa,
        title,
        index: 0,
      });

      jest.runAllTimers();

      expect(menuItem.getByText(title)).toBeTruthy();
      expect(menuItem).toMatchSnapshot();
    });

    it('calls on item press', () => {
      const accessibilityLabel = 'a11yLabel';
      const onItemPress = jest.fn();
      const index = 5;
      const menuItem = renderMenuItem({
        image: images.africa,
        title: 'Title',
        index,
        onItemPress,
        accessibilityLabel,
      });

      fireEvent.press(menuItem.getByA11yLabel(accessibilityLabel));
      jest.runAllTimers();

      expect(onItemPress).toBeCalledTimes(1);
      expect(onItemPress).toBeCalledWith(index);
    });
  });
});
