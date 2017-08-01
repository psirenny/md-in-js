// @flow

import colorBlackHsl from './color_black_hsl';
import shadowAmbientOpacity from './shadow_ambient_opacity';
import shadowElevation6 from './shadow_elevation_6';
import shadowKeyPenumbraOpacity from './shadow_key_penumbra_opacity';
import shadowKeyUmbraOpacity from './shadow_key_umbra_opacity';

const colorBlackHslString = colorBlackHsl.join(', ');

export default shadowElevation6({
  colorBlackHslString,
  shadowAmbientOpacity,
  shadowKeyPenumbraOpacity,
  shadowKeyUmbraOpacity,
});
