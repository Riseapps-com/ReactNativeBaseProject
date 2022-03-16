import React from 'react';
import { StatusBar, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '~theme';

import themedStyles from './styles';

import type { StatusBarStyle, StyleProp, ViewProps, ViewStyle } from 'react-native';

export type ScreenContainerProps = ViewProps & {
  statusBarStyle?: StatusBarStyle;
  withSafeTopMargin?: boolean;
  withSafeBottomMargin?: boolean;
  withSafeLeftMargin?: boolean;
  withSafeRightMargin?: boolean;
};

const ScreenContainer: React.FC<ScreenContainerProps> = props => {
  const [styles] = useTheme(themedStyles);
  const { top, bottom, left, right } = useSafeAreaInsets();
  const {
    statusBarStyle,
    withSafeTopMargin,
    withSafeBottomMargin,
    withSafeLeftMargin,
    withSafeRightMargin,
    ...restProps
  } = props;
  const containerStyles: StyleProp<ViewStyle> = [
    styles.container,
    props.withSafeTopMargin && { marginTop: top },
    props.withSafeBottomMargin && { marginBottom: bottom },
    props.withSafeLeftMargin && { marginStart: left },
    props.withSafeRightMargin && { marginEnd: right },
    props.style,
  ];

  return (
    <>
      <StatusBar barStyle={statusBarStyle || 'light-content'} />
      <View {...restProps} accessibilityLabel="Screen container" style={containerStyles}>
        {props.children}
      </View>
    </>
  );
};

export default ScreenContainer;
