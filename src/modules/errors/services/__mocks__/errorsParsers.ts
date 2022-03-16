import { createMockParserException } from '~modules/tests';

module.exports = {
  ...jest.requireActual('../errorsUtils'),

  parseError: jest.fn(() => createMockParserException('parseError')),
};
