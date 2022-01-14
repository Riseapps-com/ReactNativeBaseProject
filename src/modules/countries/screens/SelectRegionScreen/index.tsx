import React from 'react';

import { ScreenContainer } from '~modules/ui';

import { SelectRegionMenu } from '../../components';
import { SelectRegionNavigation, SelectRegionRoute } from '../../types';

export type SelectRegionScreenProps = {
  navigation: SelectRegionNavigation;
  route: SelectRegionRoute;
};

const SelectRegionScreen: React.FC<SelectRegionScreenProps> = () => {
  return (
    <ScreenContainer withSafeBottomMargin>
      <SelectRegionMenu />
    </ScreenContainer>
  );
};

export default SelectRegionScreen;
