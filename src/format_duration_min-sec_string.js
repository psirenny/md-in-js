// @flow

import format from './format_duration_min-sec';
import toString from './format_parts_to-string';

export default (ms: number) => toString(format(ms));
