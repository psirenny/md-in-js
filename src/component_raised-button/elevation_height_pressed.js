// @flow

type Options = {
  componentRaisedButtonElevationHeightNormal: number,
  elevationDynamicOffset: number,
};

export default (opts: Options) => (
  opts.componentRaisedButtonElevationHeightNormal + opts.elevationDynamicOffset
);
