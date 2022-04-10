import type { Font } from '../types';

const getFont = (font: Font): string => {
  switch (font) {
    case 'black':
      return 'SFProDisplay-Black';
    case 'heavy':
      return 'SFProDisplay-Heavy';
    case 'light':
      return 'SFProDisplay-Light';
    case 'medium':
      return 'SFProDisplay-Medium';
    case 'regular':
      return 'SFProDisplay-Regular';
    case 'semiBold':
      return 'SFProDisplay-Semibold';
    case 'thin':
      return 'SFProDisplay-Thin';
    case 'ultraLight':
      return 'SFProDisplay-Ultralight';
    case 'bold':
      return 'SFProText-Bold';
    default:
      return 'SFProDisplay-Regular';
  }
};

export default getFont;
