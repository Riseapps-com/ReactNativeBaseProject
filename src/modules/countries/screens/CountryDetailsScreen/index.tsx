import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { testIDs } from '~config';
import { useTheme } from '~theme';

import { CountryDetails } from '../../components';
import { CountryDetailsNavigation, CountryDetailsRoute } from '../../types';
import themedStyles from './styles';

export type CountryDetailsScreenProps = {
  navigation: CountryDetailsNavigation;
  route: CountryDetailsRoute;
};

const CountryDetailsScreen: React.FC<CountryDetailsScreenProps> = () => {
  const { bottom } = useSafeAreaInsets();
  const [styles] = useTheme(themedStyles);

  return (
    <ScrollView
      testID={testIDs.countryDetails.scrollContainer}
      contentContainerStyle={[styles.container, { marginBottom: bottom }]}
    >
      <StatusBar barStyle={'light-content'} />

      <CountryDetails />
    </ScrollView>
  );
};

export default CountryDetailsScreen;
