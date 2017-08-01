// @flow

type Options = {
  colorBlackHslString: string,
  shadowAmbientOpacity: number,
  shadowKeyPenumbraOpacity: number,
  shadowKeyUmbraOpacity: number,
};

export default (opts: Options) => `
  0 8px 10px 1px hsla(${opts.colorBlackHslString}, ${opts.shadowKeyUmbraOpacity}),
  0 3px 14px 3px hsla(${opts.colorBlackHslString}, ${opts.shadowKeyPenumbraOpacity}),
  0 4px 15px 0 hsla(${opts.colorBlackHslString}, ${opts.shadowAmbientOpacity})
`;
