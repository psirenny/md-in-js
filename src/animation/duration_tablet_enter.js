// @flow

type Options = {
  animationDurationMobileEnter: number,
  animationDurationRatioTabletToMobile: number,
};

export default (opts: Options) => (
  opts.animationDurationRatioTabletToMobile * opts.animationDurationMobileEnter
);
