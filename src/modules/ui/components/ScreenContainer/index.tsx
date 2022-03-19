import React from 'react';
import { StatusBar, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '~theme';

import themedStyles from './styles';

import type { SafeAreaInsets } from '../../types';
import type { StatusBarStyle, StyleProp, ViewProps, ViewStyle } from 'react-native';

export type ScreenContainerProps = ViewProps & {
  statusBarStyle?: StatusBarStyle;
  safeMargin?: SafeAreaInsets;
  safePadding?: SafeAreaInsets;
  isCentered?: boolean;
};

const ScreenContainer: React.FC<ScreenContainerProps> = props => {
  const [styles] = useTheme(themedStyles);
  const { top, bottom, left, right } = useSafeAreaInsets();
  const { statusBarStyle, safeMargin, safePadding, isCentered, ...restProps } = props;
  const containerStyles: StyleProp<ViewStyle> = [
    styles.container,
    safeMargin?.top && { marginTop: top },
    safeMargin?.bottom && { marginBottom: bottom },
    safeMargin?.left && { marginStart: left },
    safeMargin?.right && { marginEnd: right },
    safePadding?.top && { paddingTop: top },
    safePadding?.bottom && { paddingBottom: bottom },
    safePadding?.left && { paddingStart: left },
    safePadding?.right && { paddingEnd: right },
    isCentered && styles.centered,
    props.style,
  ];

  return (
    <View {...restProps} accessibilityLabel="Screen container" style={containerStyles}>
      <StatusBar barStyle={statusBarStyle || 'light-content'} />
      {props.children}
    </View>
  );
};

export default ScreenContainer;
