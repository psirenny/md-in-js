// @flow

const formatLong = {
  hour: 'numeric',
  minute: '2-digit',
};

const formatShort = {
  hour: 'numeric',
};

type Input = {
  hour: number,
  minute: number,
};

export default (x: Input) => (
  x.minute ? formatLong : formatShort
);
