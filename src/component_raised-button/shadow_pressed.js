// @flow

type Options = {
  elevationShadowHeights: { [number]: number },
  componentRaisedButtonElevationHeightPressed: number,
}

export default (opts: Options) => (
  opts.elevationShadowHeights[
    opts.componentRaisedButtonElevationHeightPressed
  ]
);
