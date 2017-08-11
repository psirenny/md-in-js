// @flow

type Options = {
  componentRaisedButtonElevationNormal: number,
  elevationDynamicOffset: number,
};

export default (opts: Options) => (
  opts.componentRaisedButtonElevationNormal + opts.elevationDynamicOffset
);
