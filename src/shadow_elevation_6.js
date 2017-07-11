// @flow

type Options = {
  colorBlackHslString: string,
  shadowAmbientOpacity: number,
  shadowKeyPenumbraOpacity: number,
  shadowKeyUmbraOpacity: number,
};

export default (opts: Options) => `
  0 6px 10px 0 hsla(${opts.colorBlackHslString}, ${opts.shadowKeyUmbraOpacity}),
  0 1px 18px 0 hsla(${opts.colorBlackHslString}, ${opts.shadowKeyPenumbraOpacity}),
  0 3px 5px 0 hsla(${opts.colorBlackHslString}, ${opts.shadowAmbientOpacity})
`;
