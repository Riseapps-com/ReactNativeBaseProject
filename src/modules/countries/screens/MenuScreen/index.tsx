import React from 'react';

import { ScreenContainer } from '~modules/ui';

import { Menu } from '../../components';

import type { MenuNavigation, MenuRoute } from '../../types';

export type MenuScreenProps = {
  navigation: MenuNavigation;
  route: MenuRoute;
};

const MenuScreen: React.FC<MenuScreenProps> = () => {
  return (
    <ScreenContainer safeMargin={{ bottom: true }}>
      <Menu />
    </ScreenContainer>
  );
};

export default MenuScreen;
