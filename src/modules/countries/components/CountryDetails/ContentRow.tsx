import React from 'react';
import { View } from 'react-native';

import { Text } from '~modules/ui';
import { useTheme } from '~theme';

import themedStyles from './styles';

export type ContentRowProps = {
  title: string;
  value?: string;
};

const ContentRow: React.FC<ContentRowProps> = props => {
  const [styles] = useTheme(themedStyles);

  return (
    <View style={styles.rowContainer}>
      <Text fontStyle="bold" style={styles.title}>{`${props.title}: `}</Text>
      <Text fontStyle="bold" style={styles.value}>
        {props.value || '-'}
      </Text>
    </View>
  );
};

export default ContentRow;
