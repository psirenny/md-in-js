// @flow

type Options = {
  colorBlackRgbString: string,
  shadowAmbientOpacity: number,
  shadowKeyPenumbraOpacity: number,
  shadowKeyUmbraOpacity: number,
};

export default (opts: Options) => `
  0 12px 17px 2px rgba(${opts.colorBlackRgbString}, ${opts.shadowKeyUmbraOpacity}),
  0 5px 22px 4px rgba(${opts.colorBlackRgbString}, ${opts.shadowKeyPenumbraOpacity}),
  0 7px 8px 0 rgba(${opts.colorBlackRgbString}, ${opts.shadowAmbientOpacity})
`;
