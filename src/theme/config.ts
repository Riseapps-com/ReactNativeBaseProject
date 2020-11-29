import Color from 'color';

import * as colors from './colors';
import { Theme } from './types';

export const themes = ['light', 'dark'];

const ALPHA_VALUE = 0.5;

export const light: Theme = {
  primary: colors.INTERNATIONAL_KLEIN_BLUE,
  accent: colors.SHAMROCK,
  background: colors.WHITE,
  surface: colors.WHITE,
  error: colors.SUNSET_ORANGE,
  text: colors.CAPE_COD,
  secondaryText: colors.WHITE,
  disabled: Color(colors.CAPE_COD).alpha(ALPHA_VALUE).toString(),
  placeholder: Color(colors.CAPE_COD).alpha(ALPHA_VALUE).toString(),
  backdrop: Color(colors.CAPE_COD).alpha(ALPHA_VALUE).toString(),
  notification: colors.SHAMROCK,
};

export const dark: Theme = {
  primary: colors.KINGFISHER_DAISY,
  accent: colors.SHAMROCK,
  background: colors.CAPE_COD,
  surface: colors.CAPE_COD,
  error: colors.SUNSET_ORANGE,
  text: colors.WHITE,
  secondaryText: colors.WHITE,
  disabled: Color(colors.WHITE).alpha(ALPHA_VALUE).toString(),
  placeholder: Color(colors.WHITE).alpha(ALPHA_VALUE).toString(),
  backdrop: Color(colors.WHITE).alpha(ALPHA_VALUE).toString(),
  notification: colors.SHAMROCK,
};
