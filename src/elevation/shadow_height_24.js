// @flow

type Options = {
  colorBlackHslString: string,
  shadowAmbientOpacity: number,
  shadowKeyPenumbraOpacity: number,
  shadowKeyUmbraOpacity: number,
};

export default (opts: Options) => [
  `0 24px 38px 3px hsla(${opts.colorBlackHslString}, ${opts.shadowKeyUmbraOpacity})`,
  `0 9px 46px 8px hsla(${opts.colorBlackHslString}, ${opts.shadowKeyPenumbraOpacity})`,
  `0 11px 15px 0 hsla(${opts.colorBlackHslString}, ${opts.shadowAmbientOpacity})`,
];
