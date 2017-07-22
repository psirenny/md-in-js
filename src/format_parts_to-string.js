// @flow

type Part = { value: string };

export default (parts: Part[]) => (
  parts.map(x => x.value).join('')
);
