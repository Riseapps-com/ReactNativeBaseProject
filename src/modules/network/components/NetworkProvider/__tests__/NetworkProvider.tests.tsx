import React from 'react';
import { View } from 'react-native';

import { renderStoreComponent } from '~modules/tests';

import NetworkProvider from '../index';

describe('network', () => {
  describe('<NetworkProvider />', () => {
    it('renders <NetworkProvider />', () => {
      const networkProvider = renderStoreComponent(NetworkProvider, {
        children: <View accessibilityLabel="TestLabel" />,
      });

      expect(networkProvider.getByLabelText('TestLabel')).toBeTruthy();
    });
  });
});
