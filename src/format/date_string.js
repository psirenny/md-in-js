// @flow

import format from './date';
import toString from './parts_to-string';
import type { DateAlias } from './type_date-alias';
import type { DateInput } from './type_date-input';

export default (
  options: (DateInput) => Date$LocaleOptions,
  locales: IntlLocales,
  aliases: ?DateAlias[],
  input: DateInput,
) => (
  toString(format(options, locales, aliases, input))
);
