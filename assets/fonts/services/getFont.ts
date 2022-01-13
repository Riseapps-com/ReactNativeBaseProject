import { Font } from '../types';

const getFont = (font: Font): string => {
  switch (font) {
    case 'black':
      return 'SF Pro Display Black';
    case 'heavy':
      return 'SF Pro Display Heavy';
    case 'light':
      return 'SF Pro Display Light';
    case 'medium':
      return 'SF Pro Display Medium';
    case 'regular':
      return 'SF Pro Display Regular';
    case 'semiBold':
      return 'SF Pro Display Semibold';
    case 'thin':
      return 'SF Pro Display Thin';
    case 'ultraLight':
      return 'SF Pro Display Ultralight';
    case 'bold':
      return 'SF Pro Text Bold';
    default:
      return 'SF Pro Display Regular';
  }
};

export default getFont;
