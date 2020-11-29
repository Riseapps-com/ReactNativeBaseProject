import React from 'react';
import {
  StyleProp,
  Text as NativeText,
  TextProps as NativeTextProps,
  TextStyle,
} from 'react-native';

import { useTheme } from '~theme';

import { TextFontStyle, TextSize } from '../../types';
import themedStyles from './styles';

export type TextProps = NativeTextProps & {
  fontStyle?: TextFontStyle;
  size?: TextSize;
};

const DEFAULT_FONT_STYLE = 'regular';
const DEFAULT_FONT_SIZE = 'normal';

/**
 * Renders a text with various styles. Text properties like size and weight can be passed via props.
 *
 * Should be used for the various titles used in the app to ensure consistency.
 */
const Text: React.FC<TextProps> = props => {
  const { fontStyle, size, style, ...restProps } = props;

  const [styles] = useTheme(themedStyles);

  const textStyles: StyleProp<TextStyle>[] = [
    styles.text,
    styles[fontStyle || DEFAULT_FONT_STYLE],
    styles[size || DEFAULT_FONT_SIZE],
    style,
  ];

  return <NativeText style={textStyles} {...restProps} />;
};

export default Text;
