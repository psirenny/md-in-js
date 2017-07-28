// @flow

import format from './format_duration';
import toString from '../src/format_parts_to-string';

export default (...args: any): string => (
  toString(format(...args))
);
