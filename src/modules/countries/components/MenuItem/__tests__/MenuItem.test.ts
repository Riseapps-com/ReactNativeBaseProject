import { fireEvent } from '@testing-library/react-native';

import { renderComponent } from '~modules/tests';

import MenuItem from '../index';

import type { MenuItemProps } from '../index';

const renderMenuItem = (props: MenuItemProps) => renderComponent(MenuItem, props);

describe('countries', () => {
  describe('<MenuItem />', () => {
    it('renders <MenuItem />', () => {
      const title = 'Title';
      const menuItem = renderMenuItem({
        image: 'africa',
        title,
        index: 0,
      });

      jest.runAllTimers();

      expect(menuItem.getByText(title)).toBeTruthy();
      expect(menuItem).toMatchSnapshot();
    });

    it('calls on item press', () => {
      const testID = 'testID';
      const onItemPress = jest.fn();
      const index = 5;
      const menuItem = renderMenuItem({
        image: 'africa',
        title: 'Title',
        index,
        onItemPress,
        testID,
      });

      fireEvent.press(menuItem.getByTestId(testID));
      jest.runAllTimers();

      expect(onItemPress).toBeCalledTimes(1);
      expect(onItemPress).toBeCalledWith(index);
    });
  });
});
