// @flow

import colorBlackHsl from '../color/black_hsl';
import shadowAmbientOpacity from './shadow_ambient_opacity';
import shadowElevation2 from './shadow_height_2';
import shadowKeyPenumbraOpacity from './shadow_key_penumbra_opacity';
import shadowKeyUmbraOpacity from './shadow_key_umbra_opacity';

const colorBlackHslString = colorBlackHsl.join(', ');

export default shadowElevation2({
  colorBlackHslString,
  shadowAmbientOpacity,
  shadowKeyPenumbraOpacity,
  shadowKeyUmbraOpacity,
});
