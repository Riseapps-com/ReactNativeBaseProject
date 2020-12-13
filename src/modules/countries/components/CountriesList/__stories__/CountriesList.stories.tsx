import { storiesOf } from '@storybook/react-native';
import React from 'react';

import CountriesList from '../index';

storiesOf('CountriesList', module)
  .add('with region', () => <CountriesList region={'africa'} />)
  .add('without region', () => <CountriesList />);
