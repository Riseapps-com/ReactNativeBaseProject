import React from 'react';

import { ScreenContainer } from '~modules/ui';

import { CountryDetails } from '../../components';
import { CountryDetailsNavigation, CountryDetailsRoute } from '../../types';

export type CountryDetailsScreenProps = {
  navigation: CountryDetailsNavigation;
  route: CountryDetailsRoute;
};

const CountryDetailsScreen: React.FC<CountryDetailsScreenProps> = () => {
  return (
    <ScreenContainer withSafeBottomMargin>
      <CountryDetails />
    </ScreenContainer>
  );
};

export default CountryDetailsScreen;
