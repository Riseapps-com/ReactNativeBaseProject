import { StatusMessageAttributes } from '~modules/statusMessages/types';

export type StatusMessagesState = {
  statusMessage: StatusMessageAttributes | null;
};