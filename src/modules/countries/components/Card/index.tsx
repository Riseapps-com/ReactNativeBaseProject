import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useTheme } from '~theme';

import themedStyles from './styles';

import type { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native';

export type CardProps = TouchableOpacityProps & {
  contentStyle?: StyleProp<ViewStyle>;
};

const Card: React.FC<CardProps> = props => {
  const { contentStyle, onPress, ...restProps } = props;
  const [styles] = useTheme(themedStyles);

  return (
    <TouchableOpacity {...restProps} onPress={onPress} disabled={!onPress} style={[styles.container, props.style]}>
      <View accessibilityLabel="Content container" style={[styles.contentContainer, props.contentStyle]}>
        {props.children}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
