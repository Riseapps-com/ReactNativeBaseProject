import React from 'react';
import { ActivityIndicator as NativeActivityIndicator, View } from 'react-native';

import { useColors } from '~theme';

import styles from './styles';

export type ActivityIndicatorProps = React.ComponentProps<typeof NativeActivityIndicator>;

const ActivityIndicator: React.FC<ActivityIndicatorProps> = props => {
  const { style, ...restProps } = props;

  const { colors } = useColors();

  return (
    <View style={[styles.wrapper, style]}>
      <NativeActivityIndicator
        color={colors.ui.components.activityIndicator.defaultColor}
        size={'large'}
        {...restProps}
      />
    </View>
  );
};

export default ActivityIndicator;
