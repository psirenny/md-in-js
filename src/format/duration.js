// @flow

import _reduce from 'lodash/fp/reduce';
import type { DurationOption } from './format_duration-option';

const separator = {
  type: 'literal',
  value: ':',
};

const _reduceWithKey = _reduce.convert({ cap: false });

const reduce = (length: number) => (
  _reduceWithKey((acc, option, i) => {
    const isFirst = i === 0;
    const isLast = i === length - 1;

    const value = isLast ?
      Math.round(acc.remainder / option.value) :
      Math.floor(acc.remainder / option.value);

    const valueString = isFirst ?
      String(value) :
      String(value).padStart(2, '0');

    if (!isFirst) {
      acc.parts.push(separator);
    }

    if (!isLast) {
      acc.remainder %= option.value;
    }

    acc.parts.push({
      type: option.type,
      value: valueString,
    });

    return acc;
  })
);

export default (options: DurationOption[], ms: number) => (
  reduce(options.length)({ remainder: ms, parts: [] }, options).parts
);
