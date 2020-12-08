import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect, useMemo } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { useNavigation } from 'react-native-navigation-hooks';

import { LocalCountry, LocalRegion, useStore } from '~modules/state';
import { ActivityIndicator } from '~modules/ui';

import { COUNTRY_DETAILS_SCREEN_NAME } from '../../config';
import { CountryDetailsScreenProps } from '../../types';
import CountriesListItem from '../CountriesListItem';

export type CountriesListProps = {
  region?: LocalRegion;
};

const CountriesList: React.FC<CountriesListProps> = observer(props => {
  const navigation = useNavigation();
  const { countriesStore } = useStore();

  const countries = props.region
    ? countriesStore.localCountriesByRegion
    : countriesStore.localAllCountries;

  useEffect(() => {
    if (props.region) {
      countriesStore.getCountriesByRegion(props.region);
    } else {
      countriesStore.getAllCountries();
    }

    return () => {
      if (props.region) {
        countriesStore.resetCountriesByRegion();
      } else {
        countriesStore.resetAllCountries();
      }
    };
  }, [countriesStore, props.region]);

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

  if (countriesStore.areAllCountriesLoading || countriesStore.areCountriesByRegionLoading)
    return <ActivityIndicator />;

  return <FlatList data={countries} renderItem={renderItem} keyExtractor={keyExtractor} />;
});

export default CountriesList;
