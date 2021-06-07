import React, { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { testIDs } from '~config';
import { LocalCountry } from '~modules/state';
import { FastImage, resizeMode, Text } from '~modules/ui';
import { useTheme } from '~theme';

import { countriesUtils } from '../../services';
import themedStyles from './styles';

export type CountriesListItemProps = {
  country: LocalCountry;
  index: number;
  onItemPress?: (index: number) => void;
};

const CountriesListItem: React.FC<CountriesListItemProps> = props => {
  const [styles] = useTheme(themedStyles);
  const { onItemPress } = props;

  const handleItemPress = useCallback(
    () => onItemPress && onItemPress(props.index),
    [onItemPress, props.index]
  );

  return (
    <TouchableOpacity
      testID={testIDs.countries.country}
      onPress={handleItemPress}
      style={styles.container}
    >
      <FastImage
        style={styles.icon}
        resizeMode={resizeMode.contain}
        source={{ uri: countriesUtils.getCountryFlag(props.country.alpha2Code, 'h60') }}
      />

      <View style={styles.centerContainer}>
        <Text numberOfLines={1} fontStyle={'bold'}>
          {props.country.name}
        </Text>
        <Text numberOfLines={1} style={styles.subtitle} fontStyle={'bold'}>
          {props.country.capital || '-'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CountriesListItem;
