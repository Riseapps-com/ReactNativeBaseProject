import React from 'react';
import { View } from 'react-native';

import { useTheme } from '~theme';

import themedStyles from './styles';

const Separator: React.FC = () => {
  const [styles] = useTheme(themedStyles);

  return <View style={styles.container} />;
};

export default Separator;
