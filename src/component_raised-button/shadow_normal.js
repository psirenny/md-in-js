// @flow

type Options = {
  elevationShadowHeights: { [number]: number },
  componentRaisedButtonElevationNormal: number,
}

export default (opts: Options) => (
  opts.elevationShadowHeights[opts.componentRaisedButtonElevationNormal]
);
