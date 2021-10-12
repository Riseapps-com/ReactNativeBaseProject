import { RETRYABLE_ERROR_CODES } from '~modules/errors';

const DEFAULT_TIMES = 3;
const DEFAULT_DELAY = 5000;

export const retry = <T>(
  fn: (...args: any) => Promise<T>,
  options?: { times?: number; delay?: number }
) => {
  const passedOptions = options || {};
  const times: number = passedOptions.times || DEFAULT_TIMES;
  const delay: number = passedOptions.delay || DEFAULT_DELAY;

  return new Promise<T>((resolve, reject) => {
    let error: any;
    let retryCount = times;

    const attempt = () => {
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
        });
    };

    attempt();
  });
};
