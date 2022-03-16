import React, { useEffect } from 'react';
import { View } from 'react-native';

import { renderComponent } from '~modules/tests';

import ErrorBoundary from '../index';

import type { RenderAPI } from '@testing-library/react-native';

jest.mock('../../../services');

const Component: React.FC = () => {
  return <View testID="validComponent" />;
};

const ComponentWithError: React.FC = () => {
  useEffect(() => {
    throw 'Error';
  }, []);

  return null;
};

describe('errors', () => {
  describe('<ErrorBoundary />', () => {
    it('renders children when no error is thrown', () => {
      const FakeApp: React.FC = () => (
        <ErrorBoundary>
          <Component />
        </ErrorBoundary>
      );

      const fakeApp: RenderAPI = renderComponent(FakeApp);

      expect(fakeApp.getByTestId('validComponent')).toBeTruthy();
      expect(fakeApp.queryByTestId('errorScreen')).toBeFalsy();
    });

    it('renders ErrorScreen', () => {
      const FakeApp: React.FC = () => (
        <ErrorBoundary>
          <ComponentWithError />
        </ErrorBoundary>
      );

      const errorBoundary: RenderAPI = renderComponent(FakeApp);

      expect(errorBoundary.getByTestId('errorScreen')).toBeTruthy();
    });
  });
});
