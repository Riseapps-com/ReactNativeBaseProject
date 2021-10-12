import * as dataTransformUtilities from '../dataTransformUtilities';

describe('dataTransforms', () => {
  describe('dataTransformUtilities', () => {
    describe('comparator', () => {
      it('sorts objects by provided attribute', () => {
        const toSort = [
          {
            id: 'elementA',
            name: 'Lorem',
          },
          {
            id: 'elementB',
            name: 'Ipsum',
          },
        ];

        toSort.sort(dataTransformUtilities.comparator('name'));

        expect(toSort[0].id).toBe('elementB');
        expect(toSort[1].id).toBe('elementA');
      });

      it('sorts by sortDirection if it is specified', () => {
        const toSort = [
          {
            id: 'elementA',
            name: 'Ipsum',
          },
          {
            id: 'elementB',
            name: 'Lorem',
          },
          {
            id: 'elementC',
            name: 'Dolor',
          },
        ];

        toSort.sort(dataTransformUtilities.comparator('name'));

        expect(toSort[0].id).toBe('elementC');
        expect(toSort[1].id).toBe('elementA');
        expect(toSort[2].id).toBe('elementB');
      });
    });
  });
});
