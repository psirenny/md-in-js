// @flow

type Options = {
  colorBlackHslString: string,
  shadowAmbientOpacity: number,
  shadowKeyPenumbraOpacity: number,
  shadowKeyUmbraOpacity: number,
};

export default (opts: Options) => [
  `0 12px 17px 2px hsla(${opts.colorBlackHslString}, ${opts.shadowKeyUmbraOpacity})`,
  `0 5px 22px 4px hsla(${opts.colorBlackHslString}, ${opts.shadowKeyPenumbraOpacity})`,
  `0 7px 8px 0 hsla(${opts.colorBlackHslString}, ${opts.shadowAmbientOpacity})`,
];
