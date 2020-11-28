import React from 'react';
import { Text as NativeText, TextStyle } from 'react-native';

import { TextFontStyle, TextSize } from '../../types';
import styles from './styles';

export type TextProps = React.ComponentProps<typeof NativeText> & {
  fontStyle?: TextFontStyle;
  size?: TextSize;
  style?: TextStyle;
};

const DEFAULT_FONT_STYLE = 'regular';
const DEFAULT_FONT_SIZE = 'normal';

/**
 * Renders a text with various styles. Text properties like size and weight can be passed via props.
 *
 * Should be used for the various titles used in the app to ensure consistency.
 */
const Text: React.FC<TextProps> = (props: TextProps) => {
  const { fontStyle, size, style, ...restProps } = props;

  const textStyles: TextStyle[] = [
    styles.text,
    styles[fontStyle || DEFAULT_FONT_STYLE],
    styles[size || DEFAULT_FONT_SIZE],
    style || {},
  ];

  return <NativeText style={textStyles} {...restProps} />;
};

export default React.memo(Text);
