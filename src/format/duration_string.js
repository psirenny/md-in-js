// @flow

import format from './duration';
import toString from './parts_to-string';

export default (...args: any): string => (
  toString(format(...args))
);
