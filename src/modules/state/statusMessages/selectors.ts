import { selector } from 'recoil';

import { statusMessagesAtom } from './atoms';
import { STATUS_MESSAGES_STATE_KEY } from './config';

import type { StatusMessagesState } from './types';
import type { StatusMessageAttributes } from '~modules/statusMessages/types';
import type { RecoilValueReadOnly } from 'recoil';

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
