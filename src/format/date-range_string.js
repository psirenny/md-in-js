// @flow

import format from './date-range';
import toString from './parts_to-string';
import type { DateAlias } from './type_date-alias';
import type { DateInput } from './type_date-input';

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
