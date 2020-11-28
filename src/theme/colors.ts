import Color from 'color';

const INTERNATIONAL_KLEIN_BLUE = '#0036A7';
const CAPE_COD = '#4A4E4D';

export const WHITE = '#FFFFFF';
export const BLACK = '#000000';
export const WHITE_ALPHA = (alpha: number): string => Color(WHITE).alpha(alpha).toString();
export const BLACK_ALPHA = (alpha: number): string => Color(BLACK).alpha(alpha).toString();

export const PRIMARY = INTERNATIONAL_KLEIN_BLUE;
export const TEXT = CAPE_COD;
