// @flow

type Options = {
  elevationShadowHeights: { [number]: number },
  componentRaisedButtonElevationPressed: number,
}

export default (opts: Options) => (
  opts.elevationShadowHeights[opts.componentRaisedButtonElevationPressed]
);
