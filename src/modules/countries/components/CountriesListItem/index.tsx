import React, { useCallback } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { Text } from '~modules/ui';
import { useTheme } from '~theme';

import { LocalCountry } from '../../types';
import themedStyles from './styles';

export type CountriesListItemProps = {
  country: LocalCountry;
  index: number;
  onItemPress?: (index: number) => void;
};

const CountriesListItem: React.FC<CountriesListItemProps> = props => {
  const [styles] = useTheme(themedStyles);
  const { onItemPress } = props;

  const title = props.country.name;
  const subtitle = props.country.capital || '-';

  const handleItemPress = useCallback(() => onItemPress && onItemPress(props.index), [onItemPress, props.index]);

  return (
    <TouchableOpacity accessibilityLabel="Countries list item" onPress={handleItemPress} style={styles.container}>
      <Image style={styles.icon} resizeMode="contain" source={{ uri: props.country.flagLink }} />

      <View style={styles.centerContainer}>
        <Text numberOfLines={1} fontStyle="bold">
          {title}
        </Text>
        <Text numberOfLines={1} style={styles.subtitle} fontStyle="bold">
          {subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CountriesListItem;
