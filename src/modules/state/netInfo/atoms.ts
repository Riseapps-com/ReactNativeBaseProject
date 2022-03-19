import { atom } from 'recoil';

import { DEFAULT_NET_INFO_STATE, NET_INFO_STATE_KEY } from './config';

export const netInfoAtom = atom({
  key: NET_INFO_STATE_KEY,
  default: DEFAULT_NET_INFO_STATE,
});
