// @flow

type Options = {
  elevationShadowHeights: { [number]: number },
  componentRaisedButtonElevationHeightNormal: number,
}

export default (opts: Options) => (
  opts.elevationShadowHeights[
    opts.componentRaisedButtonElevationHeightNormal
  ]
);
