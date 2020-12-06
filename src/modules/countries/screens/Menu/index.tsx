import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationFunctionComponent, Options } from 'react-native-navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '~theme';

import { Menu } from '../../components';
import themedStyles from './styles';

const MenuScreen: NavigationFunctionComponent = props => {
  const [styles] = useTheme(themedStyles);
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { marginTop: top, marginBottom: bottom }]}>
      <StatusBar barStyle={'light-content'} />

      <Menu componentId={props.componentId} />
    </View>
  );
};

MenuScreen.options = (): Options => ({
  topBar: {
    visible: false,
  },
});

export default MenuScreen;
