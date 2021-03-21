import React from 'react';
import { StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '~theme';

import { Menu } from '../../components';
import { MenuNavigation, MenuRoute } from '../../types';
import themedStyles from './styles';

export type MenuScreenProps = {
  navigation: MenuNavigation;
  route: MenuRoute;
};

const MenuScreen: React.FC<MenuScreenProps> = () => {
  const { bottom } = useSafeAreaInsets();
  const [styles] = useTheme(themedStyles);

  return (
    <View style={[styles.container, { marginBottom: bottom }]}>
      <StatusBar barStyle={'light-content'} />

      <Menu />
    </View>
  );
};

export default MenuScreen;
