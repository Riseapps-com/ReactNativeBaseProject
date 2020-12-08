import React, { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { LocalCountry } from '~modules/state';
import { Text } from '~modules/ui';
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

  const handleItemPress = useCallback(() => onItemPress && onItemPress(props.index), [
    onItemPress,
    props.index,
  ]);

  return (
    <TouchableOpacity onPress={handleItemPress} style={styles.container}>
      <FastImage
        style={styles.icon}
        resizeMode={FastImage.resizeMode.contain}
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