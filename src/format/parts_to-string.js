// @flow

export default (parts: IntlFormatPart[]) => (
  parts.map(x => x.value).join('')
);
