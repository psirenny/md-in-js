// @flow

import type { DateAliasMatch } from './format_type_date-alias-match';
import type { DateInput } from './format_type_date-input';

export type DateAlias = (DateInput, Date$LocaleOptions) => ?[
  Date$LocaleOptions,
  DateAliasMatch,
];
