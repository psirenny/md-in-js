// @flow

type Options = {
  animationDurationDesktopFullScreen: number,
  animationDurationMobileFullScreen: number,
};

export default (opts: Options) => (
  opts.animationDurationDesktopFullScreen / opts.animationDurationMobileFullScreen
);
