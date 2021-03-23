import { useNavigation, useRoute } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect, useMemo } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { testIDs } from '~config';
import { LocalCountry, useStore } from '~modules/state';
import { ActivityIndicator, Error } from '~modules/ui';

import { COUNTRY_DETAILS_SCREEN_NAME } from '../../config';
import { CountriesRoute } from '../../types';
import CountriesListItem from '../CountriesListItem';

const CountriesList: React.FC = observer(() => {
  const navigation = useNavigation();
  const { params } = useRoute<CountriesRoute>();
  const { region } = params;
  const { countriesStore } = useStore();

  const countries = region
    ? countriesStore.localCountriesByRegion
    : countriesStore.localAllCountries;

  useEffect(() => {
    if (region) {
      countriesStore.getCountriesByRegion(region);
    } else {
      countriesStore.getAllCountries();
    }

    return () => {
      if (region) {
        countriesStore.resetCountriesByRegion();
      } else {
        countriesStore.resetAllCountries();
      }
    };
  }, [countriesStore, region]);

  const handleItemPress = useCallback(
    async (index: number) => {
      navigation.navigate(COUNTRY_DETAILS_SCREEN_NAME, {
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

  if ((region && countriesStore.countriesByRegionError) || countriesStore.allCountriesError)
    return <Error />;

  return (
    <FlatList
      testID={testIDs.countries.scrollContainer}
      data={countries}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
});

export default CountriesList;
