// @flow

type Options = {
  animationDurationMobileExit: number,
  animationDurationRatioTabletToMobile: number,
};

export default (opts: Options) => (
  opts.animationDurationRatioTabletToMobile * opts.animationDurationMobileExit
);
