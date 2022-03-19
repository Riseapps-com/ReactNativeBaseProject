import type { NetInfoState as NativeNetInfoState } from '@react-native-community/netinfo';

export type NetInfoState = {
  netInfo: Nullable<NativeNetInfoState>;
};
