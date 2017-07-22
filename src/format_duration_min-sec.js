// @flow

import msPerMin from './units_ms-per-min';
import msPerSec from './units_ms-per-sec';

export default (ms: number) => {
  const mins = Math.floor(ms / msPerMin);
  const minsRemainder = ms % msPerMin;
  const secs = Math.round(minsRemainder / msPerSec);

  return [
    { type: 'minute', value: String(mins) },
    { type: 'literal', value: ':' },
    { type: 'second', value: String(secs).padStart(2, '0') },
  ];
};
