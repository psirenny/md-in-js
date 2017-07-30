// @flow

import format from './format_date-range';
import toString from '../src/format_parts_to-string';
import type { DateAlias } from './format_type_date-alias';
import type { DateInput } from './format_type_date-input';

export default (
  options: (DateInput) => Date$LocaleOptions,
  locales: IntlLocales,
  ltr: boolean,
  aliases: ?DateAlias[],
  input1: DateInput,
  input2: DateInput,
) => (
  toString(format(options, locales, ltr, aliases, input1, input2))
);
