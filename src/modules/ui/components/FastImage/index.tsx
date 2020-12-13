import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import NativeFastImage, { FastImageProps as NativeFastImageProps } from 'react-native-fast-image';

export type FastImageProps = NativeFastImageProps & {
  style: StyleProp<ViewStyle>;
};

const FastImage: React.FC<FastImageProps> = props => {
  return <NativeFastImage {...props} style={props.style} />;
};

export default FastImage;
