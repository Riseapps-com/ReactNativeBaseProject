import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { useNavigation, withNavigationProvider } from 'react-native-navigation-hooks';

import { images } from '~assets/images';

import { COUNTRIES_SCREEN_NAME, SELECT_REGION_SCREEN_NAME } from '../../config';
import { MenuItem } from '../index';

const Menu: NavigationFunctionComponent = props => {
  const { t } = useTranslation();

  const navigation = useNavigation(props.componentId);

  const handleAllCountriesPress = useCallback(async () => {
    await navigation.push(COUNTRIES_SCREEN_NAME);
  }, [navigation]);

  const handleCountriesByRegionPress = useCallback(async () => {
    await navigation.push(SELECT_REGION_SCREEN_NAME);
  }, [navigation]);

  return (
    <>
      <MenuItem
        title={t('allCountries')}
        image={images.flag}
        onItemPress={handleAllCountriesPress}
        bottomSeparator={true}
      />
      <MenuItem
        title={t('countriesByRegion')}
        image={images.region}
        onItemPress={handleCountriesByRegionPress}
      />
    </>
  );
};

export default withNavigationProvider(Menu);
