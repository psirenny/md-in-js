// @flow

import msPerHour from './units_ms-per-hour';
import msPerMin from './units_ms-per-min';
import msPerSec from './units_ms-per-sec';

export default (ms: number) => {
  const hours = Math.floor(ms / msPerHour);
  const hoursRemainder = ms % msPerHour;
  const mins = Math.floor(hoursRemainder / msPerMin);
  const minsRemainer = hoursRemainder % msPerMin;
  const secs = Math.round(minsRemainer / msPerSec);

  return [
    { type: 'hour', value: String(hours) },
    { type: 'literal', value: ':' },
    { type: 'minute', value: String(mins).padStart(2, '0') },
    { type: 'literal', value: ':' },
    { type: 'second', value: String(secs).padStart(2, '0') },
  ];
};
