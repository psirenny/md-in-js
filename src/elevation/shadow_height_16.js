// @flow

type Options = {
  colorBlackHslString: string,
  shadowAmbientOpacity: number,
  shadowKeyPenumbraOpacity: number,
  shadowKeyUmbraOpacity: number,
};

export default (opts: Options) => [
  `0 16px 24px 2px hsla(${opts.colorBlackHslString}, ${opts.shadowKeyUmbraOpacity})`,
  `0 6px 30px 5px hsla(${opts.colorBlackHslString}, ${opts.shadowKeyPenumbraOpacity})`,
  `0 8px 10px 0 hsla(${opts.colorBlackHslString}, ${opts.shadowAmbientOpacity})`,
];
