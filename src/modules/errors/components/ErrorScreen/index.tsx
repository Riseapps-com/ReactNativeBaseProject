import React from 'react';
import { useTranslation } from 'react-i18next';
import { StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, Text } from '~modules/ui';
import { useTheme } from '~theme';

import themedStyles from './styles';

export type ErrorScreenProps = {
  onDismiss: () => void;
};

const ErrorScreen: React.FC<ErrorScreenProps> = props => {
  const { t } = useTranslation();
  const [styles] = useTheme(themedStyles);
  const { bottom } = useSafeAreaInsets();

  return (
    <View testID="errorScreen" style={[styles.errorScreen, { marginBottom: bottom }]}>
      <StatusBar barStyle="light-content" />

      <View style={styles.content}>
        <Text fontStyle="bold" size="l" style={styles.title}>
          {t('errors.title')}
        </Text>

        <Text>{t('errors.subtitle')}</Text>
      </View>

      <Button onPress={props.onDismiss}>{t('errors.dismiss')}</Button>
    </View>
  );
};

export default ErrorScreen;
