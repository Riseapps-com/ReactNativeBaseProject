import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { useImages } from '~assets';
import { useTheme } from '~theme';

import { COUNTRIES_SCREEN_NAME, regions } from '../../config';
import MenuItem from '../MenuItem';
import themedStyles from './styles';

const SelectRegionMenu: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [styles] = useTheme(themedStyles);
  const images = useImages();

  const handleItemPress = useCallback(
    (index: number) => {
      navigation.navigate(COUNTRIES_SCREEN_NAME, {
        region: regions[index],
        title: t(regions[index]),
      });
    },
    [navigation, t]
  );

  return (
    <View style={styles.container}>
      {regions.map((region, index) => (
        <MenuItem
          key={index}
          title={t(`selectRegionMenu.${region}`)}
          image={images[region]}
          index={index}
          onItemPress={handleItemPress}
          testID={region}
        />
      ))}
    </View>
  );
};

export default SelectRegionMenu;
