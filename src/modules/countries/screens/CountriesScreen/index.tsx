import React from 'react';
import { StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '~theme';

import { CountriesList } from '../../components';
import { CountriesNavigation, CountriesRoute } from '../../types';
import themedStyles from './styles';

export type CountriesScreenProps = {
  navigation: CountriesNavigation;
  route: CountriesRoute;
};

const CountriesScreen: React.FC<CountriesScreenProps> = () => {
  const { bottom } = useSafeAreaInsets();
  const [styles] = useTheme(themedStyles);

  return (
    <View style={[styles.container, { marginBottom: bottom }]}>
      <StatusBar barStyle="light-content" />

      <CountriesList />
    </View>
  );
};

export default CountriesScreen;
