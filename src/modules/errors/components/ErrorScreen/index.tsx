import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, StatusBar, View } from 'react-native';

import { Text } from '~modules/ui';
import { useTheme } from '~theme';

import themedStyles from './styles';

export type ErrorScreenProps = {
  onDismiss: () => void;
};

const ErrorScreen: React.FC<ErrorScreenProps> = props => {
  const { t } = useTranslation();
  const [styles, theme] = useTheme(themedStyles);

  return (
    <View testID="errorScreen" style={styles.errorScreen}>
      <StatusBar barStyle="light-content" />

      <View style={styles.content}>
        <Text fontStyle={'bold'} size={'bigger'} style={styles.title}>
          {t('errorBoundaryTitle')}
        </Text>

        <Text fontStyle="bold">{t('errorBoundaryTitle')}</Text>
        <Text>{t('errorBoundarySubtitle')}</Text>
      </View>

      <Button onPress={props.onDismiss} title={t('dismiss')} color={theme.primary} />
    </View>
  );
};

export default ErrorScreen;
