import React, { useContext, useEffect, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContext, useNavigation } from 'react-native-navigation-hooks';

import { setDefaultOptions } from '~modules/navigation';
import { dark, light } from '~theme';

const ThemeProvider: React.FC = props => {
  const { componentId } = useContext(NavigationContext);
  const navigation = useNavigation(componentId);
  const scheme = useColorScheme();
  const theme = useMemo(() => (scheme === 'dark' ? dark : light), [scheme]);

  useEffect(() => {
    navigation.mergeOptions({
      layout: {
        backgroundColor: theme.background,
        componentBackgroundColor: theme.background,
      },
      topBar: {
        title: {
          color: theme.secondaryText,
        },
        backButton: {
          color: theme.secondaryText,
        },
        background: {
          color: theme.primary,
        },
      },
    });
    setDefaultOptions();
  }, [navigation, theme]);

  return props.children as React.ReactElement;
};

export default ThemeProvider;
