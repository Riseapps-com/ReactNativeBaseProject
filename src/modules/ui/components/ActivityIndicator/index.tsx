import React from 'react';
import { ActivityIndicator as NativeActivityIndicator, View } from 'react-native';

import { useTheme } from '~theme';

import themedStyles from './styles';

import type { ActivityIndicatorProps as NativeActivityIndicatorProps } from 'react-native';

export type ActivityIndicatorProps = NativeActivityIndicatorProps;

const ActivityIndicator: React.FC<ActivityIndicatorProps> = props => {
  const [styles, theme] = useTheme(themedStyles);

  return (
    <View style={styles.wrapper}>
      <NativeActivityIndicator testID="Activity indicator" color={theme.primary} size="large" {...props} />
    </View>
  );
};

export default ActivityIndicator;
