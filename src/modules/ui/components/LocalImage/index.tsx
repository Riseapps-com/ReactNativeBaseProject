import React from 'react';
import { Image } from 'react-native';

import { useImages } from '~assets';

import type { Images } from '~assets';
import type { ImageProps, ImageStyle, StyleProp } from 'react-native';

export type LocalImageProps = Omit<ImageProps, 'source'> & {
  width?: number;
  height?: number;
  source: keyof Images;
};

const LocalImage: React.FC<LocalImageProps> = props => {
  const { width, height, source, style, ...restProps } = props;
  const imageStyles: StyleProp<ImageStyle> = [!!width && { width }, !!height && { height }, style];
  const images = useImages();
  const localSource = images[source];

  return <Image {...restProps} accessibilityLabel={source} source={localSource} style={imageStyles} />;
};

export default LocalImage;
