// @flow

import type { DateAlias } from './type_date-alias';
import type { DateInput } from './type_date-input';

export default (
  options: (DateInput) => Date$LocaleOptions,
  locales: IntlLocales,
  aliases: ?DateAlias[],
  input: DateInput,
) => {
  const date = new Date(
    input.year || 0,
    input.month || 0,
    input.day || 0,
    input.hour || 0,
    input.minute || 0,
    input.second || 0,
    input.millisecond || 0,
  );

  let intlFormat = options(input);
  let partMatches = [];

  if (aliases) {
    aliases.forEach((alias) => {
      const result = alias(input, intlFormat);

      if (result) {
        intlFormat = result[0];
        partMatches = partMatches.concat(result[1]);
      }
    });
  }

  const intl = new Intl.DateTimeFormat(locales, intlFormat);
  let parts = intl.formatToParts(date);

  if (partMatches.length) {
    parts = parts.map((part) => {
      const currentPart = part;

      partMatches.forEach((partMatch) => {
        if (currentPart.type === partMatch.type) {
          currentPart.value = partMatch.value;
        }
      });

      return currentPart;
    });
  }

  return parts;
};
