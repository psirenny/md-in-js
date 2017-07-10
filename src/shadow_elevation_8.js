// @flow

type Options = {
  colorBlackRgbString: string,
  shadowAmbientOpacity: number,
  shadowKeyPenumbraOpacity: number,
  shadowKeyUmbraOpacity: number,
};

export default (opts: Options) => `
  0 8px 10px 1px rgba(${opts.colorBlackRgbString}, ${opts.shadowKeyUmbraOpacity}),
  0 3px 14px 3px rgba(${opts.colorBlackRgbString}, ${opts.shadowKeyPenumbraOpacity}),
  0 4px 15px 0 rgba(${opts.colorBlackRgbString}, ${opts.shadowAmbientOpacity})
`;
