import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { NavigationFunctionComponent, Options } from 'react-native-navigation';

import { useTheme } from '~theme';

import { CountryDetails } from '../../components';
import { CountryDetailsScreenProps } from '../../types';
import themedStyles from './styles';

const CountryDetailsScreen: NavigationFunctionComponent<CountryDetailsScreenProps> = props => {
  const [styles] = useTheme(themedStyles);

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
