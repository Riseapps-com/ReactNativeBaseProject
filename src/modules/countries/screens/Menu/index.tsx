import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationFunctionComponent, Options } from 'react-native-navigation';

import { useTheme } from '~theme';

import { Menu } from '../../components';
import themedStyles from './styles';

const MenuScreen: NavigationFunctionComponent = props => {
  const [styles] = useTheme(themedStyles);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />

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
