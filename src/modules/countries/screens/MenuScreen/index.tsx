import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationFunctionComponent, Options } from 'react-native-navigation';

import { I18n } from '~modules/localization';
import { useTheme } from '~theme';

import { Menu } from '../../components';
import themedStyles from './styles';

const MenuScreen: NavigationFunctionComponent = () => {
  const [styles] = useTheme(themedStyles);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />

      <Menu />
    </View>
  );
};

MenuScreen.options = (): Options => ({
  topBar: {
    title: {
      text: I18n.t('menu'),
    },
  },
});

export default MenuScreen;
