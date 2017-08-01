// @flow

import type { DateInput } from './format_type_date-input';

export default (type: string, input: DateInput) => {
  if (input.hour) {
    if (type === 'dayPeriod' || type === 'dayperiod') {
      return input.hour < 12 ? 0 : 1;
    }
  }

  return input[type];
};
