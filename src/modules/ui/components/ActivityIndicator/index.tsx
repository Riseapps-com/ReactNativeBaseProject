import React from 'react';
import { ActivityIndicator as NativeActivityIndicator, View } from 'react-native';

import { useTheme } from '~theme';

import themedStyles from './styles';

export type ActivityIndicatorProps = React.ComponentProps<typeof NativeActivityIndicator>;

const ActivityIndicator: React.FC<ActivityIndicatorProps> = props => {
  const { style, ...restProps } = props;

  const [styles, theme] = useTheme(themedStyles);

  return (
    <View style={[styles.wrapper, style]}>
      <NativeActivityIndicator color={theme.primary} size={'large'} {...restProps} />
    </View>
  );
};

export default ActivityIndicator;
