// @flow

import test from 'ava';

import {
  formatDurationHourMinString,
  formatDurationHourMinSecString,
  formatDurationMinString,
  formatDurationMinSecString,
  unitsMsPerHour as hr,
  unitsMsPerMin as min,
  unitsMsPerSec as sec,
} from '../src';

test('duration "HH:MM:SS"', (t) => {
  const dur = (100 * hr) + (1 * min) + (1.5 * sec);
  const val = formatDurationHourMinSecString(dur);
  t.is(val, '100:01:02');
});

test('duration "H:MM:SS"', (t) => {
  const dur = (1 * hr) + (1 * min) + (1.5 * sec);
  const val = formatDurationHourMinSecString(dur);
  t.is(val, '1:01:02');
});

test('duration "HH:MM"', (t) => {
  const dur = (100 * hr) + (1.5 * min);
  const val = formatDurationHourMinString(dur);
  t.is(val, '100:02');
});

test('duration "H:MM"', (t) => {
  const dur = (1 * hr) + (1.5 * min);
  const val = formatDurationHourMinString(dur);
  t.is(val, '1:02');
});

test('duration "MM:SS"', (t) => {
  const dur = (100 * min) + (1.5 * sec);
  const val = formatDurationMinSecString(dur);
  t.is(val, '100:02');
});

test('duration "M:SS"', (t) => {
  const dur = (1 * min) + (1.5 * sec);
  const val = formatDurationMinSecString(dur);
  t.is(val, '1:02');
});

test('duration "M"', (t) => {
  const dur = (1.5 * min);
  const val = formatDurationMinString(dur);
  t.is(val, '2');
});
