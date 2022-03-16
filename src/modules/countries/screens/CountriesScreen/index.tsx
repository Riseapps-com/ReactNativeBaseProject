import React from 'react';

import { ScreenContainer } from '~modules/ui';

import { CountriesList } from '../../components';

import type { CountriesNavigation, CountriesRoute } from '../../types';

export type CountriesScreenProps = {
  navigation: CountriesNavigation;
  route: CountriesRoute;
};

const CountriesScreen: React.FC<CountriesScreenProps> = () => {
  return (
    <ScreenContainer withSafeBottomMargin>
      <CountriesList />
    </ScreenContainer>
  );
};

export default CountriesScreen;
