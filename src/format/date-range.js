// @flow

import formatDate from './format_date';
import formatRange from './format_range';
import getter from './format_date-getter';
import type { DateAlias } from './format_type_date-alias';
import type { DateInput } from './format_type_date-input';

const types = [
  'literal',
  'year',
  'month',
  'day',
  'dayperiod',
  'dayPeriod',
  'hour',
  'minute',
  'second',
];

export default (
  options: (DateInput) => Date$LocaleOptions,
  locales: IntlLocales,
  ltr: boolean,
  aliases: ?DateAlias[],
  input1: DateInput,
  input2: DateInput,
) => {
  const output1 = formatDate(options, locales, aliases, input1);
  const output2 = formatDate(options, locales, aliases, input2);
  return formatRange(types, getter, ltr, input1, input2, output1, output2);
};
