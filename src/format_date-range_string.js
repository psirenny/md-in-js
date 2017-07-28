// @flow

import format from './format_date-range';
import toString from '../src/format_parts_to-string';

export default (...args: any): string => (
  toString(format(...args))
);
