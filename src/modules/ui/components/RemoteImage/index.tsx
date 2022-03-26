import React from 'react';
import { Image } from 'react-native';

import type { ImageProps, ImageStyle, StyleProp } from 'react-native';

type RemoteImageProps = Omit<ImageProps, 'source'> & {
  width?: number;
  height?: number;
  source: string;
};

const RemoteImage: React.FC<RemoteImageProps> = props => {
  const { width, height, source, style, ...restProps } = props;
  const imageStyles: StyleProp<ImageStyle> = [!!width && { width }, !!height && { height }, style];

  return <Image {...restProps} accessibilityLabel={source} source={{ uri: source }} style={imageStyles} />;
};

export default RemoteImage;
