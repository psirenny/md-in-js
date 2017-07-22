// @flow

import msPerMin from './units_ms-per-min';

export default (ms: number) => {
  const mins = Math.round(ms / msPerMin);

  return [
    { type: 'minute', value: String(mins) },
  ];
};
