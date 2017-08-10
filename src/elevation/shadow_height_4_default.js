// @flow

import colorBlackHsl from '../color/black_hsl';
import shadowAmbientOpacity from './shadow_ambient_opacity';
import shadowElevation4 from './shadow_height_4';
import shadowKeyPenumbraOpacity from './shadow_key_penumbra_opacity';
import shadowKeyUmbraOpacity from './shadow_key_umbra_opacity';

const colorBlackHslString = colorBlackHsl.join(', ');

export default shadowElevation4({
  colorBlackHslString,
  shadowAmbientOpacity,
  shadowKeyPenumbraOpacity,
  shadowKeyUmbraOpacity,
});
