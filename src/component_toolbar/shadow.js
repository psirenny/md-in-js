// @flow

type Options = {
  elevationShadowHeights: { [number]: number },
  componentToolbarElevation: number,
}

export default (opts: Options) => (
  opts.elevationShadowHeights[opts.componentToolbarElevation]
);
