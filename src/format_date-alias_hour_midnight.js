// @flow

import type { DateAlias } from './format_type_date-alias';
import type { DateInput } from './format_type_date-input';

const aliasOptions = {
  hour: 'numeric',
  hour12: false,
  minute: undefined,
};

export default (value: string): DateAlias => {
  const match = { type: 'hour', value };

  return (input: DateInput, options: Date$LocaleOptions) => (
    input.hour === 0 ? [{ ...options, ...aliasOptions }, match] : null
  );
};
