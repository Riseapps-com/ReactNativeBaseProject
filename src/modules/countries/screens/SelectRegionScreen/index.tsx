import React from 'react';

import { ScreenContainer } from '~modules/ui';

import { SelectRegionMenu } from '../../components';

import type { SelectRegionNavigation, SelectRegionRoute } from '../../types';

export type SelectRegionScreenProps = {
  navigation: SelectRegionNavigation;
  route: SelectRegionRoute;
};

const SelectRegionScreen: React.FC<SelectRegionScreenProps> = () => {
  return (
    <ScreenContainer safeMargin={{ bottom: true }}>
      <SelectRegionMenu />
    </ScreenContainer>
  );
};

export default SelectRegionScreen;
