// @flow

import _dropRightWhile from 'lodash/fp/dropRightWhile';
import _dropWhile from 'lodash/fp/dropWhile';
import _includes from 'lodash/fp/includes';
import _takeWhile from 'lodash/fp/takeWhile';

export type Input = { [string]: any };
export type InputGetter = (string, Input) => any;

const inputGetSharedTypes = (get: InputGetter, input1: Input, input2: Input) => _takeWhile(
  (type: string) => get(type, input1) === get(type, input2),
);

const outputTrimLeft = (sharedTypes: string[]) => _dropWhile(
  (part: IntlFormatPart) => _includes(part.type, sharedTypes),
);

const outputTrimRight = (sharedTypes: string[]) => _dropRightWhile(
  (part: IntlFormatPart) => _includes(part.type, sharedTypes),
);

const separator = {
  type: 'literal',
  value: '–',
};

export default (
  types: string[],
  inputGetter: InputGetter,
  ltr: boolean,
  input1: Input,
  input2: Input,
  output1: IntlFormatPart[],
  output2: IntlFormatPart[],
) => {
  const sharedTypes = inputGetSharedTypes(inputGetter, input1, input2)(types);
  const left = outputTrimRight(sharedTypes)(ltr ? output1 : output2);
  const right = outputTrimLeft(sharedTypes)(ltr ? output2 : output1);
  return [...left, separator, ...right];
};
