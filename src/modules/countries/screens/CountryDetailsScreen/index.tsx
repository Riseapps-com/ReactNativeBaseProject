import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { NavigationFunctionComponent, Options } from 'react-native-navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '~theme';

import { CountryDetails } from '../../components';
import { CountryDetailsScreenProps } from '../../types';
import themedStyles from './styles';

const CountryDetailsScreen: NavigationFunctionComponent<CountryDetailsScreenProps> = props => {
  const [styles] = useTheme(themedStyles);
  const { bottom } = useSafeAreaInsets();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginBottom: bottom }}
      contentContainerStyle={styles.container}
    >
      <StatusBar barStyle={'light-content'} />

      <CountryDetails code={props.code} />
    </ScrollView>
  );
};

CountryDetailsScreen.options = (props: CountryDetailsScreenProps): Options => ({
  topBar: {
    title: {
      text: props.title,
    },
  },
});

export default CountryDetailsScreen;
