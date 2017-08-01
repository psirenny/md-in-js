// @flow

import format from './format_date';
import toString from '../src/format_parts_to-string';
import type { DateAlias } from './format_type_date-alias';
import type { DateInput } from './format_type_date-input';

export default (
  options: (DateInput) => Date$LocaleOptions,
  locales: IntlLocales,
  aliases: ?DateAlias[],
  input: DateInput,
) => (
  toString(format(options, locales, aliases, input))
);
