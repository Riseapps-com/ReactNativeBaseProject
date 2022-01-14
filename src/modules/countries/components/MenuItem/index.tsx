import React, { useCallback } from 'react';
import { Image, StyleProp, View, ViewStyle } from 'react-native';

import { Text } from '~modules/ui';
import { useTheme } from '~theme';

import Card from '../Card';
import themedStyles from './styles';

export type MenuItemProps = {
  style?: StyleProp<ViewStyle>;
  image: number;
  title: string;
  index: number;
  onItemPress?: (index: number) => void;
  testID?: string;
};

const MenuItem: React.FC<MenuItemProps> = props => {
  const [styles] = useTheme(themedStyles);
  const { onItemPress } = props;

  const handleItemPress = useCallback(() => onItemPress && onItemPress(props.index), [onItemPress, props.index]);

  return (
    <Card
      testID={props.testID}
      style={[styles.container, props.style]}
      contentStyle={styles.contentContainer}
      onPress={handleItemPress}
      activeOpacity={0.7}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={props.image} />
      </View>

      <View style={styles.titleContainer}>
        <Text numberOfLines={2} fontStyle="bold" style={styles.title}>
          {props.title}
        </Text>
      </View>
    </Card>
  );
};

export default MenuItem;
