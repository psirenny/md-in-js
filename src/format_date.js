// @flow

export type DateInput = {
  year?: number,
  month?: number,
  day?: number,
  hour?: number,
  minute?: number,
  second?: number,
  millisecond?: number,
};

export default (
  options: (DateInput) => Date$LocaleOptions,
  locales: IntlLocales,
  input: DateInput,
) => {
  const intl = new Intl.DateTimeFormat(locales, options(input));

  const date = new Date(
    input.year || 0,
    input.month || 0,
    input.day || 0,
    input.hour || 0,
    input.minute || 0,
    input.second || 0,
    input.millisecond || 0,
  );

  return intl.formatToParts(date);
};
