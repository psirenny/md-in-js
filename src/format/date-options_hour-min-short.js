// @flow

import type { DateInput } from './type_date-input';

const formatLong = {
  hour: 'numeric',
  minute: '2-digit',
};

const formatShort = {
  hour: 'numeric',
};

export default (x: DateInput) => (
  x.minute ? formatLong : formatShort
);
