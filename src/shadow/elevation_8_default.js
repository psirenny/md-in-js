// @flow

import colorBlackHsl from '../color/black_hsl';
import shadowAmbientOpacity from './ambient_opacity';
import shadowElevation8 from './elevation_8';
import shadowKeyPenumbraOpacity from './key_penumbra_opacity';
import shadowKeyUmbraOpacity from './key_umbra_opacity';

const colorBlackHslString = colorBlackHsl.join(', ');

export default shadowElevation8({
  colorBlackHslString,
  shadowAmbientOpacity,
  shadowKeyPenumbraOpacity,
  shadowKeyUmbraOpacity,
});
