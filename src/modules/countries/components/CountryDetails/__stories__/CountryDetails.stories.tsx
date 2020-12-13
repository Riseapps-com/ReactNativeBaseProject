import { storiesOf } from '@storybook/react-native';
import React from 'react';

import CountryDetails from '../index';

storiesOf('CountryDetails', module).add('with data', () => <CountryDetails code={'ua'} />);
