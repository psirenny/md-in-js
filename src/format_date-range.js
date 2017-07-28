// @flow

import formatDate from './format_date';
import formatRange from './format_range';
import type { DateInput } from './format_date';

const getter = (type: string, input: DateInput) => {
  if (type === 'dayperiod' && input.hour) return input.hour < 12 ? 0 : 1;
  if (type === 'dayPeriod' && input.hour) return input.hour < 12 ? 0 : 1;
  return input[type];
};

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
  input1: DateInput,
  input2: DateInput,
) => {
  const output1 = formatDate(options, locales, input1);
  const output2 = formatDate(options, locales, input2);
  return formatRange(types, getter, ltr, input1, input2, output1, output2);
};
