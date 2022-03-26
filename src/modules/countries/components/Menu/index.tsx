import React, { useCallback } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { useTheme } from '~theme';

import { COUNTRIES_SCREEN_NAME, SELECT_REGION_SCREEN_NAME } from '../../config';
import MenuItem from '../MenuItem';

import themedStyles from './styles';

const Menu: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [styles] = useTheme(themedStyles);

  const handleAllCountriesPress = useCallback(() => {
    navigation.navigate(COUNTRIES_SCREEN_NAME, {
      title: t('menu.allCountries'),
    });
  }, [navigation, t]);

  const handleCountriesByRegionPress = useCallback(() => {
    navigation.navigate(SELECT_REGION_SCREEN_NAME);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MenuItem
        title={t('menu.allCountries')}
        image="flag"
        index={0}
        onItemPress={handleAllCountriesPress}
        style={styles.menuItem}
        testID="All countries"
      />

      <MenuItem
        title={t('menu.countriesByRegion')}
        image="region"
        index={1}
        onItemPress={handleCountriesByRegionPress}
        style={styles.menuItem}
        testID="Countries by region"
      />
    </View>
  );
};

export default Menu;
