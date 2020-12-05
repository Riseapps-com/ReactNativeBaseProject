import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { DEFAULT_ACTIVE_OPACITY, Separator, Text, VoidCallback } from '~modules/ui';
import { useTheme } from '~theme';

import themedStyles from './styles';

export type MenuItemProps = {
  image: number;
  title: string;
  onItemPress: VoidCallback;
  bottomSeparator?: boolean;
  testID?: string;
};

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  const [styles] = useTheme(themedStyles);

  return (
    <>
      <TouchableOpacity
        activeOpacity={DEFAULT_ACTIVE_OPACITY}
        testID={props.testID}
        onPress={props.onItemPress}
        style={styles.container}
      >
        <View style={styles.imageContainer}>
          <FastImage style={styles.image} source={props.image} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableOpacity>
      {props.bottomSeparator && <Separator />}
    </>
  );
};

export default MenuItem;
