import { storiesOf } from '@storybook/react-native';
import React from 'react';

import Text from '../index';

storiesOf('Text', module)
  .add('normal font style', () => <Text>Text</Text>)
  .add('regular font style', () => <Text fontStyle={'bold'}>Text</Text>)
  .add('smallest font size', () => <Text size={'smallest'}>Text</Text>)
  .add('smaller font size', () => <Text size={'smaller'}>Text</Text>)
  .add('normal font size', () => <Text>Text</Text>)
  .add('bigger font size', () => <Text size={'bigger'}>Text</Text>)
  .add('biggest font size', () => <Text size={'biggest'}>Text</Text>);
