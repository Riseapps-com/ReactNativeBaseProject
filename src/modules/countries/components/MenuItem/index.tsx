import React, { useCallback } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';

import { DEFAULT_ACTIVE_OPACITY, Text } from '~modules/ui';
import { useTheme } from '~theme';

import themedStyles from './styles';

export type MenuItemProps = {
  style?: StyleProp<ViewStyle>;
  image: number;
  title: string;
  index: number;
  onItemPress?: (index: number) => void;
  testID?: string;
};

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  const [styles] = useTheme(themedStyles);

  const handleItemPress = useCallback(() => props.onItemPress && props.onItemPress(props.index), [
    props,
  ]);

  return (
    <TouchableOpacity
      activeOpacity={DEFAULT_ACTIVE_OPACITY}
      testID={props.testID}
      onPress={handleItemPress}
      style={[styles.container, props.style]}
    >
      <View style={styles.imageContainer}>
        <FastImage style={styles.image} source={props.image} />
      </View>

      <View style={styles.titleContainer}>
        <Text fontStyle={'bold'} style={styles.title}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
