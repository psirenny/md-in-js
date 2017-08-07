// @flow

type Options = {
  desktopExitDuration: number,
  mobileEnterDuration: number,
  mobileExitDuration: number,
};

export default (opts: Options) => (
  (opts.mobileEnterDuration / opts.mobileExitDuration) * opts.desktopExitDuration
);
