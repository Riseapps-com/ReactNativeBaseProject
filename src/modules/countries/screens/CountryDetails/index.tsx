import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { NavigationFunctionComponent, Options } from 'react-native-navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useStore } from '~modules/state';
import { ActivityIndicator } from '~modules/ui';
import { useTheme } from '~theme';

import { CountryDetails } from '../../components';
import { CountryDetailsScreenProps } from '../../types';
import themedStyles from '../Menu/styles';

const CountryDetailsScreen: NavigationFunctionComponent<CountryDetailsScreenProps> = observer(
  props => {
    const [styles] = useTheme(themedStyles);
    const { top, bottom } = useSafeAreaInsets();
    const { countriesStore } = useStore();

    useEffect(() => {
      countriesStore.getCountryDetails(props.code);
    }, [countriesStore, props.code]);

    if (countriesStore.loading) return <ActivityIndicator />;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.container, { marginTop: top, marginBottom: bottom }]}
      >
        <StatusBar barStyle={'light-content'} />

        {countriesStore.localCountryDetails ? (
          <CountryDetails country={countriesStore.localCountryDetails} />
        ) : null}
      </ScrollView>
    );
  }
);

CountryDetailsScreen.options = (props: CountryDetailsScreenProps): Options => ({
  topBar: {
    title: {
      text: props.title,
    },
  },
});

export default CountryDetailsScreen;
