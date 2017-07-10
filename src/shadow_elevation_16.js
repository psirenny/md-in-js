// @flow

type Options = {
  colorBlackRgbString: string,
  shadowAmbientOpacity: number,
  shadowKeyPenumbraOpacity: number,
  shadowKeyUmbraOpacity: number,
};

export default (opts: Options) => `
  0 16px 24px 2px rgba(${opts.colorBlackRgbString}, ${opts.shadowKeyUmbraOpacity}),
  0 6px 30px 5px rgba(${opts.colorBlackRgbString}, ${opts.shadowKeyPenumbraOpacity}),
  0 8px 10px 0 rgba(${opts.colorBlackRgbString}, ${opts.shadowAmbientOpacity})
`;
