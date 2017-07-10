// @flow

type Options = {
  colorBlackRgbString: string,
  shadowAmbientOpacity: number,
  shadowKeyPenumbraOpacity: number,
  shadowKeyUmbraOpacity: number,
};

export default (opts: Options) => `
  0 0 2px 0 rgba(${opts.colorBlackRgbString}, ${opts.shadowKeyUmbraOpacity}),
  0 2px 2px 0 rgba(${opts.colorBlackRgbString}, ${opts.shadowKeyPenumbraOpacity}),
  0 1px 3px 0 rgba(${opts.colorBlackRgbString}, ${opts.shadowAmbientOpacity})
`;
