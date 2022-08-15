import { renderComponent } from '~modules/tests';

import Card from '../index';

import type { CardProps } from '../index';

const renderCard = (props: CardProps = {}) => renderComponent(Card, props);

describe('countries', () => {
  describe('<Card />', () => {
    it('renders <Card />', () => {
      const card = renderCard();

      expect(card.getByLabelText('Content container')).toBeTruthy();
    });
  });
});
