// @flow

type Options = {
  colorBlackHslString: string,
  shadowAmbientOpacity: number,
  shadowKeyPenumbraOpacity: number,
  shadowKeyUmbraOpacity: number,
};

export default (opts: Options) => [
  `0 9px 12px 1px hsla(${opts.colorBlackHslString}, ${opts.shadowKeyUmbraOpacity})`,
  `0 3px 16px 2px hsla(${opts.colorBlackHslString}, ${opts.shadowKeyPenumbraOpacity})`,
  `0 5px 6px 0 hsla(${opts.colorBlackHslString}, ${opts.shadowAmbientOpacity})`,
];
