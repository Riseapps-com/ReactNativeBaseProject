import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';

import { getFont } from '~assets';
import { testIDs } from '~config';
import {
  COUNTRIES_SCREEN_NAME,
  CountriesScreen,
  COUNTRY_DETAILS_SCREEN_NAME,
  CountryDetailsScreen,
  MENU_SCREEN_NAME,
  MenuScreen,
  SELECT_REGION_SCREEN_NAME,
  SelectRegionScreen,
} from '~modules/countries';
import { sizes, useTheme } from '~theme';

import themedStyles from './styles';

const Stack = createStackNavigator();

const ANDROID_TOP_BAR_HEIGHT = 56;
const IOS_TOP_BAR_HEIGHT = 88;

const TOP_BAR_HEIGHT = Platform.select({
  ios: IOS_TOP_BAR_HEIGHT,
  android: ANDROID_TOP_BAR_HEIGHT,
});

const ApplicationStack: React.FC = () => {
  const { t } = useTranslation();
  const [, theme] = useTheme(themedStyles);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.primary, height: TOP_BAR_HEIGHT },
        headerTintColor: theme.separator,
        headerTitleStyle: {
          color: theme.secondaryText,
          fontSize: sizes.BASE_FONT_SIZE,
          fontFamily: getFont('quicksand-bold'),
        },
        headerBackTitleStyle: {
          fontSize: sizes.SMALLER_FONT_SIZE,
          fontFamily: getFont('quicksand-regular'),
        },
      }}
      initialRouteName={MENU_SCREEN_NAME}
    >
      {/* // COUNTRIES */}

      <Stack.Screen
        name={COUNTRIES_SCREEN_NAME}
        component={CountriesScreen}
        options={options => ({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          headerTitle: options.route.params.title,
          headerBackAccessibilityLabel: testIDs.countries.back,
        })}
      />
      <Stack.Screen
        name={COUNTRY_DETAILS_SCREEN_NAME}
        component={CountryDetailsScreen}
        options={options => ({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          headerTitle: options.route.params.title,
          headerBackAccessibilityLabel: testIDs.countryDetails.back,
        })}
      />
      <Stack.Screen
        name={MENU_SCREEN_NAME}
        component={MenuScreen}
        options={{ headerTitle: t('menu') }}
      />
      <Stack.Screen
        name={SELECT_REGION_SCREEN_NAME}
        component={SelectRegionScreen}
        options={{
          headerTitle: t('regions'),
          headerBackAccessibilityLabel: testIDs.selectRegion.back,
        }}
      />
    </Stack.Navigator>
  );
};

export default ApplicationStack;
