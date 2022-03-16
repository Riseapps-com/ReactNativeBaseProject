import React, { useCallback } from 'react';
import { FlatList } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { useRetriever } from '~modules/promises';
import { ActivityIndicator } from '~modules/ui';

import { COUNTRY_DETAILS_SCREEN_NAME } from '../../config';
import { countriesApi } from '../../services';
import CountriesListItem from '../CountriesListItem';

import type { CountriesRoute, LocalCountry } from '../../types';
import type { ListRenderItemInfo } from 'react-native';

const CountriesList: React.FC = () => {
  const navigation = useNavigation();
  const { params } = useRoute<CountriesRoute>();
  const { region } = params;

  const getCountriesByRegion = useCallback(async () => {
    if (region) return countriesApi.getCountriesByRegion(region);

    return countriesApi.getAllCountries();
  }, [region]);
  const [countries, isLoadingCountries] = useRetriever(getCountriesByRegion, undefined, true);

  const handleItemPress = useCallback(
    (index: number) => {
      if (!countries) return;

      navigation.navigate(COUNTRY_DETAILS_SCREEN_NAME, {
        code: countries[index].cca2,
        title: countries[index].name,
      });
    },
    [countries, navigation]
  );

  const renderItem = useCallback(
    (itemInfo: ListRenderItemInfo<LocalCountry>) => (
      <CountriesListItem country={itemInfo.item} index={itemInfo.index} onItemPress={handleItemPress} />
    ),
    [handleItemPress]
  );
  const keyExtractor = useCallback((localCountry: LocalCountry) => localCountry.name, []);

  if (isLoadingCountries) return <ActivityIndicator />;

  return <FlatList testID="Countries" data={countries} renderItem={renderItem} keyExtractor={keyExtractor} />;
};

export default CountriesList;
