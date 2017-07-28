// @flow

import format from './format_date';
import toString from '../src/format_parts_to-string';

export default (...args: any): string => (
  toString(format(...args))
);
