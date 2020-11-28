import React from 'react';
import { ActivityIndicator as NativeActivityIndicator, View } from 'react-native';

import { colors } from '~theme';

import styles from './styles';

export type ActivityIndicatorProps = React.ComponentProps<typeof NativeActivityIndicator>;

const ActivityIndicator: React.FC<ActivityIndicatorProps> = props => {
  const { style, ...restProps } = props;

  return (
    <View style={[styles.wrapper, style]}>
      <NativeActivityIndicator color={colors.PRIMARY} size={'large'} {...restProps} />
    </View>
  );
};

export default ActivityIndicator;
