import React from 'react';

import { Text as PaperText } from 'react-native-paper';

import { useTheme } from '~theme';

import themedStyles from './styles';

import type { TextFontStyle, TextSize } from '../../types';
import type { StyleProp, TextStyle } from 'react-native';

export type TextProps = React.ComponentProps<typeof PaperText> & {
  fontStyle?: TextFontStyle;
  size?: TextSize;
};

const DEFAULT_FONT_STYLE = 'regular';
const DEFAULT_FONT_SIZE = 's';

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

  return <PaperText style={textStyles} {...restProps} />;
};

export default Text;
