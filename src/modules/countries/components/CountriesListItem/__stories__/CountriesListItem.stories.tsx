import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { log } from '../../../logger';
import CountriesListItem from '../index';

storiesOf('CountriesListItem', module)
  .add('with data', () => (
    <CountriesListItem
      country={{
        id: 'id',
        name: 'Ukraine',
        capital: 'Kiev',
        region: 'Europe',
        subregion: 'Europe',
        timezones: [],
        currencies: [],
        alpha2Code: 'ua',
      }}
      index={0}
      onItemPress={index => log('onItemPress:: ', index)}
    />
  ))
  .add('with long data', () => (
    <CountriesListItem
      country={{
        id: 'id',
        name: 'Ukraine'.repeat(5),
        capital: 'Kiev'.repeat(5),
        region: 'Europe',
        subregion: 'Europe',
        timezones: [],
        currencies: [],
        alpha2Code: 'ua',
      }}
      index={0}
    />
  ));
