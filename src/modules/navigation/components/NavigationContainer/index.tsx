import React, { useCallback, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefaultTheme, NavigationContainer as NativeNavigationContainer } from '@react-navigation/native';

import { useTheme } from '~theme';

import { NAVIGATION_STATE_PERSISTENCE_KEY } from '../../config';

import themedStyles from './styles';

import type { NavigationState } from '@react-navigation/native';

type NavigationContainerProps = React.ComponentProps<typeof NativeNavigationContainer>;

const NavigationContainer: React.FC<NavigationContainerProps> = props => {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState<NavigationState>();
  const [, theme] = useTheme(themedStyles);
  const NavigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.background,
    },
  };

  const handleStateChange = useCallback((state?: NavigationState) => {
    AsyncStorage.setItem(NAVIGATION_STATE_PERSISTENCE_KEY, JSON.stringify(state));
  }, []);

  useEffect(() => {
    const restoreState = async (): Promise<void> => {
      try {
        const savedStateString = await AsyncStorage.getItem(NAVIGATION_STATE_PERSISTENCE_KEY);

        if (savedStateString) {
          const state: NavigationState = JSON.parse(savedStateString);

          setInitialState(state);
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) restoreState();
  }, [isReady]);

  if (!isReady) return null;

  return (
    <NativeNavigationContainer theme={NavigationTheme} initialState={initialState} onStateChange={handleStateChange}>
      {props.children}
    </NativeNavigationContainer>
  );
};

export default NavigationContainer;
