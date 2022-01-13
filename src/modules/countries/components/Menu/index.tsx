import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { useImages } from '~assets';
import { useTheme } from '~theme';

import { COUNTRIES_SCREEN_NAME, SELECT_REGION_SCREEN_NAME } from '../../config';
import MenuItem from '../MenuItem';
import themedStyles from './styles';

const Menu: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [styles] = useTheme(themedStyles);
  const images = useImages();

  const handleAllCountriesPress = useCallback(() => {
    navigation.navigate(COUNTRIES_SCREEN_NAME, {
      title: t('allCountries'),
    });
  }, [navigation, t]);

  const handleCountriesByRegionPress = useCallback(() => {
    navigation.navigate(SELECT_REGION_SCREEN_NAME);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MenuItem
        title={t('allCountries')}
        image={images.flag}
        index={0}
        onItemPress={handleAllCountriesPress}
        style={styles.menuItem}
        accessibilityLabel="All countries"
      />

      <MenuItem
        title={t('countriesByRegion')}
        image={images.region}
        index={1}
        onItemPress={handleCountriesByRegionPress}
        style={styles.menuItem}
        accessibilityLabel="Countries by region"
      />
    </View>
  );
};

export default Menu;
