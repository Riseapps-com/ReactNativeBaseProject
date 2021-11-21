import React from 'react';
import { StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '~theme';

import { SelectRegionMenu } from '../../components';
import { SelectRegionNavigation, SelectRegionRoute } from '../../types';
import themedStyles from './styles';

export type SelectRegionScreenProps = {
  navigation: SelectRegionNavigation;
  route: SelectRegionRoute;
};

const SelectRegionScreen: React.FC<SelectRegionScreenProps> = () => {
  const { bottom } = useSafeAreaInsets();
  const [styles] = useTheme(themedStyles);

  return (
    <View style={[styles.container, { marginBottom: bottom }]}>
      <StatusBar barStyle="light-content" />

      <SelectRegionMenu />
    </View>
  );
};

export default SelectRegionScreen;
