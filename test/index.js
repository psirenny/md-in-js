// @flow

import test from 'ava';
import IntlPolyfill from 'intl';

import {
  formatDateAliasHourMidnightEn,
  formatDateOptionsHourMin,
  formatDateOptionsHourMinShort,
  formatDateOptionsMonthDay,
  formatDateOptionsMonthDayShort,
  formatDateOptionsWeekday,
  formatDateOptionsWeekdayHourMinAbbr,
  formatDateOptionsWeekdayNarrow,
  formatDateOptionsWeekdayShort,
  formatDateOptionsYearMonthDay,
  formatDateOptionsYearMonthDayShort,
  formatDateRangeString,
  formatDateString,
  formatDurationOptionsHourMin,
  formatDurationOptionsHourMinSec,
  formatDurationOptionsMin,
  formatDurationOptionsMinSec,
  formatDurationString,
  unitsMsPerHour as hr,
  unitsMsPerMin as min,
  unitsMsPerSec as sec,
} from '../src';

Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;

test('date "h"', (t) => {
  const locales = 'en';
  const x = { hour: 9 };
  const format = formatDateOptionsHourMinShort;
  const value = formatDateString(format, locales, null, x);
  t.is(value, '9 AM');
});

test('date "h:mm"', (t) => {
  const locales = 'en';
  const x = { hour: 10, minute: 30 };
  const format = formatDateOptionsHourMin;
  const value = formatDateString(format, locales, null, x);
  t.is(value, '10:30 AM');
});

test('date "H"', (t) => {
  const locales = 'es';
  const x = { hour: 9 };
  const format = formatDateOptionsHourMinShort;
  const value = formatDateString(format, locales, null, x);
  t.is(value, '9');
});

test('date "H:mm"', (t) => {
  const locales = 'es';
  const x = { hour: 9 };
  const format = formatDateOptionsHourMin;
  const value = formatDateString(format, locales, null, x);
  t.is(value, '9:00');
});

test('date "Midnight"', (t) => {
  const locales = 'en';
  const x = { hour: 0 };
  const aliases = [formatDateAliasHourMidnightEn];
  const format = formatDateOptionsHourMin;
  const value = formatDateString(format, locales, aliases, x);
  t.is(value, 'Midnight');
});

test('date "d?"', (t) => {
  const locales = 'en';
  const x = { day: 0 };
  const format = formatDateOptionsWeekdayNarrow;
  const value = formatDateString(format, locales, null, x);
  t.is(value, 'S');
});

test('date "ddd"', (t) => {
  const locales = 'en';
  const x = { day: 0 };
  const format = formatDateOptionsWeekdayShort;
  const value = formatDateString(format, locales, null, x);
  t.is(value, 'Sun');
});

test('date "dddd"', (t) => {
  const locales = 'en';
  const x = { day: 0 };
  const format = formatDateOptionsWeekday;
  const value = formatDateString(format, locales, null, x);
  t.is(value, 'Sunday');
});

test('date "ddd, h:mm"', (t) => {
  const locales = 'en';
  const x = { day: 0, hour: 9 };
  const format = formatDateOptionsWeekdayHourMinAbbr;
  const value = formatDateString(format, locales, null, x);
  t.is(value, 'Sun 9:00 AM');
});

test('date "MMM d"', (t) => {
  const locales = 'en';
  const x = { month: 0, day: 4 };
  const format = formatDateOptionsMonthDayShort;
  const value = formatDateString(format, locales, null, x);
  t.is(value, 'Jan 4');
});

test('date "MMMM d"', (t) => {
  const locales = 'en';
  const x = { month: 0, day: 4 };
  const format = formatDateOptionsMonthDay;
  const value = formatDateString(format, locales, null, x);
  t.is(value, 'January 4');
});

test('date "MMM d, yyyy"', (t) => {
  const locales = 'en';
  const x = { year: 2014, month: 0, day: 4 };
  const format = formatDateOptionsYearMonthDayShort;
  const value = formatDateString(format, locales, null, x);
  t.is(value, 'Jan 4, 2014');
});

test('date "MMMM d, yyyy"', (t) => {
  const locales = 'en';
  const x = { year: 2014, month: 0, day: 4 };
  const format = formatDateOptionsYearMonthDay;
  const value = formatDateString(format, locales, null, x);
  t.is(value, 'January 4, 2014');
});

test('date range "h–h:mm tt"', (t) => {
  const locales = 'en';
  const x = { hour: 9 };
  const y = { hour: 10, minute: 30 };
  const format = formatDateOptionsHourMinShort;
  const value = formatDateRangeString(format, locales, true, null, x, y);
  t.is(value, '9–10:30 AM');
});

test('date range "h t–h:mm tt"', (t) => {
  const locales = 'en';
  const x = { hour: 9 };
  const y = { hour: 12, minute: 30 };
  const format = formatDateOptionsHourMinShort;
  const value = formatDateRangeString(format, locales, true, null, x, y);
  t.is(value, '9 AM–12:30 PM');
});

test('date range "h:mm–h:mm tt"', (t) => {
  const locales = 'en';
  const x = { hour: 9, minute: 30 };
  const y = { hour: 10, minute: 30 };
  const format = formatDateOptionsHourMin;
  const value = formatDateRangeString(format, locales, true, null, x, y);
  t.is(value, '9:30–10:30 AM');
});

test('date range "h:mm tt–h:mm tt"', (t) => {
  const locales = 'en';
  const x = { hour: 9, minute: 30 };
  const y = { hour: 12, minute: 30 };
  const format = formatDateOptionsHourMin;
  const value = formatDateRangeString(format, locales, true, null, x, y);
  t.is(value, '9:30 AM–12:30 PM');
});

test('date range "H–H:mm"', (t) => {
  const locales = 'es';
  const x = { hour: 9 };
  const y = { hour: 10, minute: 30 };
  const format = formatDateOptionsHourMin;
  const value = formatDateRangeString(format, locales, true, null, x, y);
  t.is(value, '9:00–10:30');
});

test('date range "H:mm–H:mm"', (t) => {
  const locales = 'es';
  const x = { hour: 9, minute: 30 };
  const y = { hour: 10, minute: 30 };
  const format = formatDateOptionsHourMin;
  const value = formatDateRangeString(format, locales, true, null, x, y);
  t.is(value, '9:30–10:30');
});

test('date range h tt–Midnight"', (t) => {
  const locales = 'en';
  const x = { hour: 18 };
  const y = { hour: 0 };
  const aliases = [formatDateAliasHourMidnightEn];
  const format = formatDateOptionsHourMinShort;
  const value = formatDateRangeString(format, locales, true, aliases, x, y);
  t.is(value, '6 PM–Midnight');
});

test('date range "d?–d?"', (t) => {
  const locales = 'en';
  const x = { day: 1 };
  const y = { day: 5 };
  const format = formatDateOptionsWeekdayNarrow;
  const value = formatDateRangeString(format, locales, true, null, x, y);
  t.is(value, 'M–F');
});

test('date range "ddd–ddd"', (t) => {
  const locales = 'en';
  const x = { day: 1 };
  const y = { day: 5 };
  const format = formatDateOptionsWeekdayShort;
  const value = formatDateRangeString(format, locales, true, null, x, y);
  t.is(value, 'Mon–Fri');
});

test('date range "dddd–dddd"', (t) => {
  const locales = 'en';
  const x = { day: 1 };
  const y = { day: 5 };
  const format = formatDateOptionsWeekday;
  const value = formatDateRangeString(format, locales, true, null, x, y);
  t.is(value, 'Monday–Friday');
});

test('date range "MMM d–d"', (t) => {
  const locales = 'en';
  const x = { month: 0, day: 4 };
  const y = { month: 0, day: 6 };
  const format = formatDateOptionsMonthDayShort;
  const value = formatDateRangeString(format, locales, true, null, x, y);
  t.is(value, 'Jan 4–6');
});

test('date range "MMM d–MMM d"', (t) => {
  const locales = 'en';
  const x = { month: 0, day: 4 };
  const y = { month: 1, day: 6 };
  const format = formatDateOptionsMonthDayShort;
  const value = formatDateRangeString(format, locales, true, null, x, y);
  t.is(value, 'Jan 4–Feb 6');
});

test('date range "MMMM d–d"', (t) => {
  const locales = 'en';
  const x = { month: 0, day: 4 };
  const y = { month: 0, day: 6 };
  const format = formatDateOptionsMonthDay;
  const value = formatDateRangeString(format, locales, true, null, x, y);
  t.is(value, 'January 4–6');
});

test('date range "MMMM d–MMMM d"', (t) => {
  const locales = 'en';
  const x = { month: 0, day: 4 };
  const y = { month: 1, day: 6 };
  const format = formatDateOptionsMonthDay;
  const value = formatDateRangeString(format, locales, true, null, x, y);
  t.is(value, 'January 4–February 6');
});

test('date range "MMM d–MMM d, yyyy"', (t) => {
  const locales = 'en';
  const x = { year: 2014, month: 0, day: 4 };
  const y = { year: 2014, month: 1, day: 6 };
  const format = formatDateOptionsYearMonthDayShort;
  const value = formatDateRangeString(format, locales, true, null, x, y);
  t.is(value, 'Jan 4–Feb 6, 2014');
});

test('date range "MMM d, yyyy–MMM d, yyyy"', (t) => {
  const locales = 'en';
  const x = { year: 2014, month: 0, day: 4 };
  const y = { year: 2016, month: 1, day: 6 };
  const format = formatDateOptionsYearMonthDayShort;
  const value = formatDateRangeString(format, locales, true, null, x, y);
  t.is(value, 'Jan 4, 2014–Feb 6, 2016');
});

test('date range "MMMM d–MMMM d, yyyy"', (t) => {
  const locales = 'en';
  const x = { year: 2014, month: 0, day: 4 };
  const y = { year: 2014, month: 1, day: 6 };
  const format = formatDateOptionsYearMonthDay;
  const value = formatDateRangeString(format, locales, true, null, x, y);
  t.is(value, 'January 4–February 6, 2014');
});

test('date range "MMMM d, yyyy–MMMM d, yyyy"', (t) => {
  const locales = 'en';
  const x = { year: 2014, month: 0, day: 4 };
  const y = { year: 2016, month: 1, day: 6 };
  const format = formatDateOptionsYearMonthDay;
  const value = formatDateRangeString(format, locales, true, null, x, y);
  t.is(value, 'January 4, 2014–February 6, 2016');
});

test('duration "HH:MM:SS"', (t) => {
  const duration = (100 * hr) + (1 * min) + (1.5 * sec);
  const format = formatDurationOptionsHourMinSec;
  const value = formatDurationString(format, duration);
  t.is(value, '100:01:02');
});

test('duration "H:MM:SS"', (t) => {
  const duration = (1 * hr) + (1 * min) + (1.5 * sec);
  const format = formatDurationOptionsHourMinSec;
  const value = formatDurationString(format, duration);
  t.is(value, '1:01:02');
});

test('duration "HH:MM"', (t) => {
  const duration = (100 * hr) + (1.5 * min);
  const format = formatDurationOptionsHourMin;
  const value = formatDurationString(format, duration);
  t.is(value, '100:02');
});

test('duration "H:MM"', (t) => {
  const duration = (1 * hr) + (1.5 * min);
  const format = formatDurationOptionsHourMin;
  const value = formatDurationString(format, duration);
  t.is(value, '1:02');
});

test('duration "MM:SS"', (t) => {
  const duration = (100 * min) + (1.5 * sec);
  const format = formatDurationOptionsMinSec;
  const value = formatDurationString(format, duration);
  t.is(value, '100:02');
});

test('duration "M:SS"', (t) => {
  const duration = (1 * min) + (1.5 * sec);
  const format = formatDurationOptionsMinSec;
  const value = formatDurationString(format, duration);
  t.is(value, '1:02');
});

test('duration "M"', (t) => {
  const duration = (1.5 * min);
  const format = formatDurationOptionsMin;
  const value = formatDurationString(format, duration);
  t.is(value, '2');
});
