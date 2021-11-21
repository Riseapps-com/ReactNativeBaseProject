import { selector } from 'recoil';

import { statusMessagesState } from './atoms';
import { STATUS_MESSAGES_STATE_KEY } from './config';
import { StatusMessagesState } from './types';

export const statusMessagesSelector = (key: keyof StatusMessagesState) =>
  selector({
    key: STATUS_MESSAGES_STATE_KEY,
    get: opts => {
      const statusMessages = opts.get(statusMessagesState);

      return statusMessages[key];
    },
  });
