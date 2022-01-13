import { atom } from 'recoil';

import { DEFAULT_STATUS_MESSAGES_STATE, STATUS_MESSAGES_STATE_KEY } from './config';

export const statusMessagesAtom = atom({
  key: STATUS_MESSAGES_STATE_KEY,
  default: DEFAULT_STATUS_MESSAGES_STATE,
});
