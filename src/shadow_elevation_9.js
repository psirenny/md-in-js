// @flow

type Options = {
  colorBlackRgbString: string,
  shadowAmbientOpacity: number,
  shadowKeyPenumbraOpacity: number,
  shadowKeyUmbraOpacity: number,
};

export default (opts: Options) => `
  0 9px 12px 1px rgba(${opts.colorBlackRgbString}, ${opts.shadowKeyUmbraOpacity}),
  0 3px 16px 2px rgba(${opts.colorBlackRgbString}, ${opts.shadowKeyPenumbraOpacity}),
  0 5px 6px 0 rgba(${opts.colorBlackRgbString}, ${opts.shadowAmbientOpacity})
`;
