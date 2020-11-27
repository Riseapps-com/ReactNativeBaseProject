type Font = 'quicksand-bold' | 'quicksand-regular';

const getFont = (font: Font): string => {
  switch (font) {
    case 'quicksand-regular':
      return 'Quicksand-Regular';
    case 'quicksand-bold':
      return 'Quicksand-Bold';
    default:
      return '';
  }
};

export default getFont;
