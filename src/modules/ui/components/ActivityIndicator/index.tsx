import React from 'react';
import {
  ActivityIndicator as NativeActivityIndicator,
  ActivityIndicatorProps as NativeActivityIndicatorProps,
  View,
} from 'react-native';

import { useTheme } from '~theme';

import themedStyles from './styles';

export type ActivityIndicatorProps = NativeActivityIndicatorProps;

const ActivityIndicator: React.FC<ActivityIndicatorProps> = props => {
  const [styles, theme] = useTheme(themedStyles);

  return (
    <View style={styles.wrapper}>
      <NativeActivityIndicator color={theme.primary} size={'large'} {...props} />
    </View>
  );
};

export default ActivityIndicator;
