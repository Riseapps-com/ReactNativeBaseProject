type Font = 'quicksand-bold' | 'quicksand-regular' | 'quicksand-light';

const getFont = (font: Font): string => {
  switch (font) {
    case 'quicksand-light':
      return 'Quicksand-Light';
    case 'quicksand-regular':
      return 'Quicksand-Regular';
    case 'quicksand-bold':
      return 'Quicksand-Bold';
    default:
      return '';
  }
};

export default getFont;
