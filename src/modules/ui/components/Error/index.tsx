import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { useTheme } from '~theme';

import Text from '../Text';
import themedStyles from './styles';

const Error: React.FC = () => {
  const [styles] = useTheme(themedStyles);
  const { t } = useTranslation();

  return (
    <View style={styles.wrapper}>
      <Text fontStyle={'bold'} size={'bigger'} style={styles.error}>
        {t('errorBoundaryTitle')}
      </Text>
    </View>
  );
};

export default Error;
