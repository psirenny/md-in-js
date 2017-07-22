// @flow

import msPerHour from './units_ms-per-hour';
import msPerMin from './units_ms-per-min';

export default (ms: number) => {
  const hours = Math.floor(ms / msPerHour);
  const hoursRemainder = ms % msPerHour;
  const mins = Math.round(hoursRemainder / msPerMin);

  return [
    { type: 'hour', value: String(hours) },
    { type: 'literal', value: ':' },
    { type: 'minute', value: String(mins).padStart(2, '0') },
  ];
};
