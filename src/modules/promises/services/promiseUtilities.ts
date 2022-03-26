import { RETRYABLE_ERROR_CODES, RuntimeError } from '~modules/errors';

const DEFAULT_TIMES = 3;
const DEFAULT_DELAY = 1000;
const DEFAULT_ABORT_TIMEOUT = 8000;

export const retry = <T>(
  fn: (...args: any) => Promise<T>,
  options: { times?: number; delay?: number; abortTimeout?: number } = {}
): Promise<T> => {
  const times: number = options.times || DEFAULT_TIMES;
  const delay: number = options.delay || DEFAULT_DELAY;
  const abortTimeout = options.abortTimeout || DEFAULT_ABORT_TIMEOUT;

  return new Promise<T>((resolve, reject) => {
    let error: any;
    let retryCount = times;

    const attempt = (): void => {
      const abortTimeoutId: NodeJS.Timeout = setTimeout(() => {
        reject(new RuntimeError('RequestWasAbortedException'));
      }, abortTimeout);

      if (retryCount === 0) {
        return reject(error);
      }

      fn()
        .then(resolve)
        .catch((e: any) => {
          if (!e.code || !RETRYABLE_ERROR_CODES.includes(e.code)) return reject(e);

          retryCount -= 1;
          error = e;

          setTimeout(() => {
            attempt();
          }, delay);
        })
        .finally(() => clearTimeout(abortTimeoutId));
    };

    attempt();
  });
};
