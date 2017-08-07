// @flow

type Options = {
  animationDurationMobileFullScreen: number,
  animationDurationRatioWearableToMobile: number,
};

export default (opts: Options) => (
  opts.animationDurationRatioWearableToMobile * opts.animationDurationMobileFullScreen
);
