/* eslint-disable no-console */
import * as logger from '../logger';

const category = 'TEST_CATEGORY';
const message = 'Test message.';
const details = { userId: 1 };
const OLD_ENV = process.env;
const { log } = console;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...OLD_ENV };
  console.log = jest.fn();
});

afterAll(() => {
  process.env = OLD_ENV;
  console.log = log;
});

describe('logger', () => {
  describe('logger', () => {
    describe('log', () => {
      it('logs category and message', () => {
        logger.log(category, message);

        expect(console.log).toBeCalledTimes(1);
        expect(console.log).toBeCalledWith(`[${category}]`, message);
      });

      it('logs details when provided', () => {
        logger.log(category, message, details);

        expect(console.log).toBeCalledTimes(2);
        expect(console.log).toBeCalledWith(JSON.stringify(details, undefined, 2));
      });
    });
  });
});
