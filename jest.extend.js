import '@testing-library/jest-native/extend-expect';

import { toMatchDiffSnapshot } from 'snapshot-diff';

expect.extend({ toMatchDiffSnapshot });
