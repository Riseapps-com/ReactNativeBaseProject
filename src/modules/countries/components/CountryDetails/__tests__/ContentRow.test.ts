import { act } from '@testing-library/react-native';

import { renderComponent } from '~modules/tests';

import ContentRow from '../ContentRow';

import type { ContentRowProps } from '../ContentRow';

const renderContentRow = (props: ContentRowProps) => renderComponent(ContentRow, props);

describe('countries', () => {
  describe('<ContentRow />', () => {
    it('renders <ContentRow />', () => {
      const contentRow = renderContentRow({
        title: 'title',
        value: 'value',
      });

      expect(contentRow.getByLabelText('Content row')).toBeTruthy();
      expect(contentRow.getByText('title:')).toBeTruthy();
      expect(contentRow.getByText('value')).toBeTruthy();
    });

    it('renders placeholder if data is not specified', () => {
      const contentRow = renderContentRow({
        title: 'title',
      });

      act(() => jest.runAllTimers());

      expect(contentRow.getByText('-')).toBeTruthy();
    });
  });
});
