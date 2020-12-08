import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationFunctionComponent, Options } from 'react-native-navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '~theme';

import { Menu } from '../../components';
import themedStyles from './styles';

const MenuScreen: NavigationFunctionComponent = () => {
  const [styles] = useTheme(themedStyles);
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: top, paddingBottom: bottom }]}>
      <StatusBar barStyle={'light-content'} />

      <Menu />
    </View>
  );
};

MenuScreen.options = (): Options => ({
  topBar: {
    visible: false,
  },
});

export default MenuScreen;
