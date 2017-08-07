// @flow

type Options = {
  animationDurationMobileEnter: number,
  animationDurationRatioWearableToMobile: number,
};

export default (opts: Options) => (
  opts.animationDurationRatioWearableToMobile * opts.animationDurationMobileEnter
);
