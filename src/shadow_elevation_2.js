// @flow

type Options = {
  colorBlackRgbString: string,
  shadowAmbientOpacity: number,
  shadowKeyPenumbraOpacity: number,
  shadowKeyUmbraOpacity: number,
};

export default (opts: Options) => `
  0 0 4px 0 rgba(${opts.colorBlackRgbString}, ${opts.shadowKeyUmbraOpacity}),
  0 3px 4px 0 rgba(${opts.colorBlackRgbString}, ${opts.shadowKeyPenumbraOpacity}),
  0 1px 5px 0 rgba(${opts.colorBlackRgbString}, ${opts.shadowAmbientOpacity})
`;
