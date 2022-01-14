import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { useRetriever } from '~modules/promises';
import { ActivityIndicator } from '~modules/ui';

import { COUNTRY_DETAILS_SCREEN_NAME } from '../../config';
import { countriesApi } from '../../services';
import { CountriesRoute, LocalCountry } from '../../types';
import CountriesListItem from '../CountriesListItem';

const CountriesList: React.FC = () => {
  const navigation = useNavigation();
  const { params } = useRoute<CountriesRoute>();
  const { region } = params;

  const [countries, isLoadingCountries] = useRetriever(
    async () => {
      if (region) return countriesApi.getCountriesByRegion(region);

      return countriesApi.getAllCountries();
    },
    [region],
    undefined,
    true
  );

  const handleItemPress = useCallback(
    (index: number) => {
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

  return (
    <FlatList
      accessibilityLabel="Countries list"
      data={countries}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default CountriesList;
