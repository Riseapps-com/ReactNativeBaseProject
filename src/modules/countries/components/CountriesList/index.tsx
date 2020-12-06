import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect, useMemo } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { useNavigation } from 'react-native-navigation-hooks';

import { Region } from '~modules/api';
import { COUNTRY_DETAILS_SCREEN_NAME } from '~modules/countries';
import { useStore } from '~modules/state';
import { ActivityIndicator } from '~modules/ui';

import { CountryDetailsScreenProps, LocalCountry } from '../../types';
import CountriesListItem from '../CountriesListItem';

export type CountriesListProps = {
  region?: Region;
};

const CountriesList: NavigationFunctionComponent<CountriesListProps> = observer(props => {
  const navigation = useNavigation(props.componentId);
  const { countriesStore } = useStore();
  const countries = props.region
    ? countriesStore.localCountriesByRegion
    : countriesStore.localAllCountries;

  const handleItemPress = useCallback(
    async (index: number) => {
      await navigation.push<CountryDetailsScreenProps>(COUNTRY_DETAILS_SCREEN_NAME, {
        code: countries[index].alpha2Code,
        title: countries[index].name,
      });
    },
    [countries, navigation]
  );
  const renderItem = useMemo(
    () => (itemInfo: ListRenderItemInfo<LocalCountry>) => {
      return (
        <CountriesListItem
          country={itemInfo.item}
          index={itemInfo.index}
          onItemPress={handleItemPress}
        />
      );
    },
    [handleItemPress]
  );
  const keyExtractor = (localCountry: LocalCountry) => localCountry.id;

  useEffect(() => {
    if (props.region) {
      countriesStore.getCountriesByRegion(props.region);
    } else {
      countriesStore.getAllCountries();
    }
  }, [countriesStore, props.region]);

  if (countriesStore.loading) return <ActivityIndicator />;

  return <FlatList data={countries} renderItem={renderItem} keyExtractor={keyExtractor} />;
});

export default CountriesList;
