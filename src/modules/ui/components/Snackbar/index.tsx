import React from 'react';
import { Snackbar as NativeSnackbar } from 'react-native-paper';

import { useTheme } from '~theme';

import { SnackbarAction, SnackbarDuration, SnackbarKind } from '../../types';
import Text from '../Text';
import themedStyles from './styles';

export type SnackbarProps = {
  isVisible: boolean;
  message?: string;
  kind?: SnackbarKind;
  action?: SnackbarAction;
  duration?: SnackbarDuration;
  onDismiss: () => void;
};

const Snackbar: React.FC<SnackbarProps> = props => {
  const [styles, theme] = useTheme(themedStyles);
  const kind = props.kind || 'success';
  const duration = props.duration || 1500;
  const accentColors = {
    info: theme.secondaryText,
    success: theme.secondaryText,
    error: theme.secondaryText,
  };

  return (
    <NativeSnackbar
      visible={props.isVisible}
      duration={duration}
      style={styles[kind]}
      action={props.action}
      theme={{ colors: { accent: accentColors[kind] } }}
      onDismiss={props.onDismiss}
    >
      <Text style={styles.message} size="s">
        {props.message}
      </Text>
    </NativeSnackbar>
  );
};

export default Snackbar;
