// @flow

import formatMs from './format_duration_min';
import toString from './format_parts_to-string';

export default (ms: number) => toString(formatMs(ms));
