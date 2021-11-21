import Color from 'color';

import * as colors from './colors';
import { Theme } from './types';

export const themes = ['light', 'dark'];

export const light: Theme = {
  primary: colors.INTERNATIONAL_KLEIN_BLUE,
  accent: colors.SHAMROCK,
  background: colors.WHITE,
  surface: colors.WHITE,
  error: colors.SUNSET_ORANGE,
  text: colors.CAPE_COD,
  secondaryText: colors.WHITE,
  separator: colors.WHITE,
  disabled: Color(colors.CAPE_COD).alpha(0.5).toString(),
  placeholder: Color(colors.CAPE_COD).alpha(0.5).toString(),
  backdrop: colors.BLACK,
  notification: colors.SHAMROCK,
};

export const dark: Theme = {
  primary: colors.VIOLET_EGGPLANT,
  accent: colors.SHAMROCK,
  background: colors.CAPE_COD,
  surface: colors.CAPE_COD,
  error: colors.SUNSET_ORANGE,
  text: colors.WHITE,
  secondaryText: colors.WHITE,
  separator: colors.WHITE,
  disabled: Color(colors.WHITE).alpha(0.5).toString(),
  placeholder: Color(colors.WHITE).alpha(0.5).toString(),
  backdrop: colors.BLACK,
  notification: colors.SHAMROCK,
};
