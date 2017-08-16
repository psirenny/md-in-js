// @flow

/* eslint-disable no-undef */

declare type IntlLocales = string | string[];

declare type IntlFormatPart = {
  type: string,
  value: string,
};

declare type IntlDateFormatPart = {
  type: (
    | 'day'
    | 'dayPeriod'
    | 'era'
    | 'hour'
    | 'literal'
    | 'minute'
    | 'month'
    | 'second'
    | 'timeZoneName'
    | 'weekday'
    | 'year'
    | string
  ),
  value: string,
};

declare class IntlDateTimeFormat {
  constructor(): IntlDateTimeFormat;
  constructor(localesOrOptions: (IntlLocales | Date$LocaleOptions)): IntlDateTimeFormat;
  constructor(locales: IntlLocales, options: Date$LocaleOptions): IntlDateTimeFormat;
  format(date: Date): string;
  formatToParts(date: Date): IntlDateFormatPart[];
}

declare var Intl: {
  DateTimeFormat: typeof IntlDateTimeFormat,
}
