import { NavigationFunctionComponent } from 'react-native-navigation';

export type Screen = {
  id: string;
  component: NavigationFunctionComponent<any>;
};
