import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { images } from '~assets';
import { I18n } from '~modules/localization';

import { log } from '../../../logger';
import MenuItem from '../index';

storiesOf('MenuItem', module)
  .add('with data', () => (
    <MenuItem
      image={images.americas}
      title={I18n.t('americas')}
      index={0}
      onItemPress={index => log('onItemPress:: ', index)}
    />
  ))
  .add('with long title', () => (
    <MenuItem image={images.americas} title={'long title'.repeat(10)} index={0} />
  ));
