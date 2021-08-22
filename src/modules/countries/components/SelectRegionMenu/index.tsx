import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { useImages } from '~assets';
import { testIDs } from '~config';
import { useTheme } from '~theme';

import { COUNTRIES_SCREEN_NAME, regions } from '../../config';
import { SelectRegionNavigation } from '../../types';
import MenuItem from '../MenuItem';
import themedStyles from './styles';

const SelectRegionMenu: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<SelectRegionNavigation>();
  const [styles] = useTheme(themedStyles);
  const images = useImages();

  const handleItemPress = useCallback(
    async (index: number) => {
      navigation.navigate(COUNTRIES_SCREEN_NAME, {
        region: regions[index],
        title: t(regions[index]),
      });
    },
    [navigation, t]
  );

  return (
    <View style={styles.container}>
      <MenuItem
        title={t('africa')}
        image={images.africa}
        index={0}
        onItemPress={handleItemPress}
        testID={testIDs.selectRegion.africa}
      />

      <MenuItem
        title={t('americas')}
        image={images.americas}
        index={1}
        onItemPress={handleItemPress}
        testID={testIDs.selectRegion.americas}
      />

      <MenuItem
        title={t('asia')}
        image={images.asia}
        index={2}
        onItemPress={handleItemPress}
        testID={testIDs.selectRegion.asia}
      />

      <MenuItem
        title={t('europe')}
        image={images.europe}
        index={3}
        onItemPress={handleItemPress}
        testID={testIDs.selectRegion.europe}
      />

      <MenuItem
        title={t('oceania')}
        image={images.oceania}
        index={4}
        onItemPress={handleItemPress}
        testID={testIDs.selectRegion.oceania}
      />
    </View>
  );
};

export default SelectRegionMenu;
