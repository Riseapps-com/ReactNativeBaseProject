import React, { useCallback } from 'react';
import { Image, StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

import { DEFAULT_ACTIVE_OPACITY, Text } from '~modules/ui';
import { useTheme } from '~theme';

import themedStyles from './styles';

export type MenuItemProps = {
  style?: StyleProp<ViewStyle>;
  image: number;
  title: string;
  index: number;
  onItemPress?: (index: number) => void;
  accessibilityLabel?: string;
};

const MenuItem: React.FC<MenuItemProps> = props => {
  const [styles] = useTheme(themedStyles);
  const { onItemPress } = props;

  const handleItemPress = useCallback(() => onItemPress && onItemPress(props.index), [onItemPress, props.index]);

  return (
    <TouchableOpacity
      activeOpacity={DEFAULT_ACTIVE_OPACITY}
      accessibilityLabel={props.accessibilityLabel}
      onPress={handleItemPress}
      style={[styles.container, props.style]}
    >
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={props.image} />
        </View>

        <View style={styles.titleContainer}>
          <Text numberOfLines={2} fontStyle="bold" style={styles.title}>
            {props.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
