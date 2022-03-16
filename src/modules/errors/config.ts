import type { ErrorCode } from './types';

export const RETRYABLE_ERROR_CODES: ErrorCode[] = ['UnknownException', 'ServerErrorException'];
