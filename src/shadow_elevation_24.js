// @flow

type Options = {
  colorBlackRgbString: string,
  shadowAmbientOpacity: number,
  shadowKeyPenumbraOpacity: number,
  shadowKeyUmbraOpacity: number,
};

export default (opts: Options) => `
  0 24px 38px 3px rgba(${opts.colorBlackRgbString}, ${opts.shadowKeyUmbraOpacity}),
  0 9px 46px 8px rgba(${opts.colorBlackRgbString}, ${opts.shadowKeyPenumbraOpacity}),
  0 11px 15px 0 rgba(${opts.colorBlackRgbString}, ${opts.shadowAmbientOpacity})
`;
