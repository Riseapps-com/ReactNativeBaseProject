import { RecoilValueReadOnly, selector } from 'recoil';

import { StatusMessageAttributes } from '~modules/statusMessages';

import { statusMessagesAtom } from './atoms';
import { STATUS_MESSAGES_STATE_KEY } from './config';
import { StatusMessagesState } from './types';

export const statusMessagesSelector = (
  key: keyof StatusMessagesState
): RecoilValueReadOnly<StatusMessageAttributes | null> =>
  selector({
    key: STATUS_MESSAGES_STATE_KEY,
    get: opts => {
      const statusMessages = opts.get(statusMessagesAtom);

      return statusMessages[key];
    },
  });
