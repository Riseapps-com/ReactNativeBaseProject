import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-native-navigation-hooks';

import { images } from '~assets';

import { COUNTRIES_SCREEN_NAME, SELECT_REGION_SCREEN_NAME } from '../../config';
import { CountriesScreenProps } from '../../types';
import MenuItem from '../MenuItem';

const Menu: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const handleAllCountriesPress = useCallback(async () => {
    await navigation.push<CountriesScreenProps>(COUNTRIES_SCREEN_NAME);
  }, [navigation]);

  const handleCountriesByRegionPress = useCallback(async () => {
    await navigation.push(SELECT_REGION_SCREEN_NAME);
  }, [navigation]);

  return (
    <>
      <MenuItem
        title={t('allCountries')}
        image={images.flag}
        index={0}
        onItemPress={handleAllCountriesPress}
        bottomSeparator={true}
      />

      <MenuItem
        title={t('countriesByRegion')}
        image={images.region}
        index={1}
        onItemPress={handleCountriesByRegionPress}
      />
    </>
  );
};

export default Menu;
