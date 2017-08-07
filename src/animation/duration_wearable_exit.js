// @flow

type Options = {
  animationDurationMobileExit: number,
  animationDurationRatioWearableToMobile: number,
};

export default (opts: Options) => (
  opts.animationDurationRatioWearableToMobile * opts.animationDurationMobileExit
);
