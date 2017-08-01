// @flow

import type { DateInput } from './format_type_date-input';

const formatLong = {
  weekday: 'short',
  hour: 'numeric',
  minute: '2-digit',
};

const formatShort = {
  weekday: 'short',
  hour: 'numeric',
};

export default (x: DateInput) => (
  x.minute ? formatLong : formatShort
);
