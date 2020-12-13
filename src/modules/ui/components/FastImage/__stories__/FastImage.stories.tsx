import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { images } from '~assets';

import FastImage from '../index';

storiesOf('FastImage', module).add('with data', () => (
  <FastImage source={images.americas} style={{ width: 40, height: 40 }} />
));
