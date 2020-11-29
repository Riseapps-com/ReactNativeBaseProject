import Color from 'color';

export const INTERNATIONAL_KLEIN_BLUE = '#0036A7';
export const CAPE_COD = '#4A4E4D';
export const SUNSET_ORANGE = '#fe4a49';
export const KINGFISHER_DAISY = '#52057B';
export const SHAMROCK = '#29C7AC';

export const WHITE = '#FFFFFF';
export const BLACK = '#000000';
export const WHITE_ALPHA = (alpha: number): string => Color(WHITE).alpha(alpha).toString();
export const BLACK_ALPHA = (alpha: number): string => Color(BLACK).alpha(alpha).toString();
