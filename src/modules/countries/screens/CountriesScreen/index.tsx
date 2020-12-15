import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationFunctionComponent, Options } from 'react-native-navigation';

import { I18n } from '~modules/localization';
import { testIDs } from '~modules/tests';
import { useTheme } from '~theme';

import { CountriesList } from '../../components';
import { CountriesScreenProps } from '../../types';
import themedStyles from './styles';

const CountriesScreen: NavigationFunctionComponent<CountriesScreenProps> = props => {
  const [styles] = useTheme(themedStyles);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />

      <CountriesList region={props.region} />
    </View>
  );
};

CountriesScreen.options = (props: CountriesScreenProps): Options => ({
  topBar: {
    title: {
      text: props.region ? I18n.t(props.region) : I18n.t('allCountries'),
    },
    backButton: {
      testID: testIDs.countries.back,
    },
  },
});

export default CountriesScreen;
