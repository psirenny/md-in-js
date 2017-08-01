// @flow

import type { DateAliasMatch } from './type_date-alias-match';
import type { DateInput } from './type_date-input';

export type DateAlias = (DateInput, Date$LocaleOptions) => ?[
  Date$LocaleOptions,
  DateAliasMatch,
];
