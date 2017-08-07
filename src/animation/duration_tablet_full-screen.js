// @flow

type Options = {
  animationDurationMobileFullScreen: number,
  animationDurationRatioTabletToMobile: number,
};

export default (opts: Options) => (
  opts.animationDurationRatioTabletToMobile * opts.animationDurationMobileFullScreen
);
