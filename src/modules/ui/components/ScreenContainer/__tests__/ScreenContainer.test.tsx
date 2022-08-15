import React from 'react';
import { View } from 'react-native';

import { renderNavigationComponent } from '~modules/tests';

import ScreenContainer from '../index';

import type { ScreenContainerProps } from '../index';
import type { PropsWithChildren } from 'react';

const renderScreenContainer = (props: PropsWithChildren<ScreenContainerProps>) =>
  renderNavigationComponent(ScreenContainer, true, props);

describe('ui', () => {
  describe('<ScreenContainer />', () => {
    it('renders <ScreenContainer />', () => {
      const screenContainer = renderScreenContainer({
        children: <View accessibilityLabel="Children" />,
      });

      expect(screenContainer.getByLabelText('Screen container')).toBeTruthy();
      expect(screenContainer.getByLabelText('Children')).toBeTruthy();
      expect(screenContainer).toMatchSnapshot();
    });

    it('centers content if `isCentered` is specified', () => {
      const screenContainer = renderScreenContainer({
        children: <View accessibilityLabel="Children" />,
        isCentered: true,
      });

      expect(screenContainer.getByLabelText('Screen container')).toHaveStyle({
        alignItems: 'center',
        justifyContent: 'center',
      });
    });

    describe('statusBarStyle', () => {
      it('renders default statusBarStyle', () => {
        const screenContainer = renderScreenContainer({
          children: <View accessibilityLabel="Children" />,
        });

        expect(screenContainer.UNSAFE_getByProps({ barStyle: 'light-content' })).toBeTruthy();
      });

      it('renders statusBarStyle if it is provided', () => {
        const screenContainer = renderScreenContainer({
          children: <View accessibilityLabel="Children" />,
          statusBarStyle: 'dark-content',
        });

        expect(screenContainer.UNSAFE_getByProps({ barStyle: 'dark-content' })).toBeTruthy();
      });
    });

    describe('safeMargin', () => {
      it('renders top margin', () => {
        const screenContainer = renderScreenContainer({
          children: <View accessibilityLabel="Children" />,
          safeMargin: { top: true },
        });

        expect(screenContainer.getByLabelText('Screen container')).toHaveStyle({ marginTop: 8 });
      });

      it('renders bottom margin', () => {
        const screenContainer = renderScreenContainer({
          children: <View accessibilityLabel="Children" />,
          safeMargin: { bottom: true },
        });

        expect(screenContainer.getByLabelText('Screen container')).toHaveStyle({ marginBottom: 16 });
      });

      it('renders left margin', () => {
        const screenContainer = renderScreenContainer({
          children: <View accessibilityLabel="Children" />,
          safeMargin: { left: true },
        });

        expect(screenContainer.getByLabelText('Screen container')).toHaveStyle({ marginStart: 24 });
      });

      it('renders right margin', () => {
        const screenContainer = renderScreenContainer({
          children: <View accessibilityLabel="Children" />,
          safeMargin: { right: true },
        });

        expect(screenContainer.getByLabelText('Screen container')).toHaveStyle({ marginEnd: 32 });
      });
    });

    describe('safePadding', () => {
      it('renders top padding', () => {
        const screenContainer = renderScreenContainer({
          children: <View accessibilityLabel="Children" />,
          safePadding: { top: true },
        });

        expect(screenContainer.getByLabelText('Screen container')).toHaveStyle({ paddingTop: 8 });
      });

      it('renders bottom padding', () => {
        const screenContainer = renderScreenContainer({
          children: <View accessibilityLabel="Children" />,
          safePadding: { bottom: true },
        });

        expect(screenContainer.getByLabelText('Screen container')).toHaveStyle({ paddingBottom: 16 });
      });

      it('renders left padding', () => {
        const screenContainer = renderScreenContainer({
          children: <View accessibilityLabel="Children" />,
          safePadding: { left: true },
        });

        expect(screenContainer.getByLabelText('Screen container')).toHaveStyle({ paddingStart: 24 });
      });

      it('renders right padding', () => {
        const screenContainer = renderScreenContainer({
          children: <View accessibilityLabel="Children" />,
          safePadding: { right: true },
        });

        expect(screenContainer.getByLabelText('Screen container')).toHaveStyle({ paddingEnd: 32 });
      });
    });
  });
});
