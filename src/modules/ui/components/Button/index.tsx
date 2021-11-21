import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

import { useTheme } from '~theme';

import { ButtonTextType, ButtonType } from '../../types';
import themedStyles from './styles';

export type ButtonProps = Omit<
  React.ComponentProps<typeof PaperButton>,
  'dark' | 'disabled' | 'loading'
> & {
  buttonType?: ButtonType;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  isLoading?: boolean;
  isDisabled?: boolean;
};

const DEFAULT_MODE = 'contained';
const DEFAULT_BUTTON_TYPE = 'primary';

const Button: React.FC<ButtonProps> = props => {
  const { mode, children, buttonType, labelStyle, style, isLoading, isDisabled, ...restProps } =
    props;
  const buttonMode = mode || DEFAULT_MODE;
  const defaultButtonType = buttonType || DEFAULT_BUTTON_TYPE;
  // eslint-disable-next-line
  const textStyleKey = `text${defaultButtonType.charAt(0).toUpperCase()}${defaultButtonType.slice(1)}` as ButtonTextType;
  const [styles] = useTheme(themedStyles);

  const buttonStyles: StyleProp<ViewStyle>[] = [
    styles.button,
    buttonMode === 'contained' && styles[defaultButtonType],
    buttonMode === 'text' && styles.textButton,
    isDisabled && styles.disabled,
    style,
  ];

  const labelStyles: StyleProp<TextStyle>[] = [styles[textStyleKey], labelStyle];

  return (
    <PaperButton
      style={buttonStyles}
      labelStyle={labelStyles}
      contentStyle={styles.buttonContent}
      mode={buttonMode}
      disabled={isDisabled}
      loading={isLoading}
      uppercase={false}
      {...restProps}
    >
      {children}
    </PaperButton>
  );
};

export default React.memo(Button);
