import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { useNavigation } from 'react-native-navigation-hooks';

import { images } from '~assets/images';

import { COUNTRIES_SCREEN_NAME, regions } from '../../config';
import { CountriesScreenProps } from '../../types';
import { MenuItem } from '../index';

const Menu: NavigationFunctionComponent = props => {
  const { t } = useTranslation();

  const navigation = useNavigation(props.componentId);

  const handleItemPress = useCallback(
    async (index: number) => {
      await navigation.push<CountriesScreenProps>(COUNTRIES_SCREEN_NAME, {
        region: regions[index],
      });
    },
    [navigation]
  );

  return (
    <>
      <MenuItem
        title={t('africa')}
        image={images.africa}
        index={0}
        onItemPress={handleItemPress}
        bottomSeparator={true}
      />

      <MenuItem
        title={t('americas')}
        image={images.americas}
        index={1}
        onItemPress={handleItemPress}
        bottomSeparator={true}
      />

      <MenuItem
        title={t('asia')}
        image={images.asia}
        index={2}
        onItemPress={handleItemPress}
        bottomSeparator={true}
      />

      <MenuItem
        title={t('europe')}
        image={images.europe}
        index={3}
        onItemPress={handleItemPress}
        bottomSeparator={true}
      />

      <MenuItem
        title={t('oceania')}
        image={images.oceania}
        index={4}
        onItemPress={handleItemPress}
      />
    </>
  );
};

export default Menu;
