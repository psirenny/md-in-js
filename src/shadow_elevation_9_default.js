// @flow

import colorBlackHsl from './color_black_hsl';
import shadowAmbientOpacity from './shadow_ambient_opacity';
import shadowElevation9 from './shadow_elevation_9';
import shadowKeyPenumbraOpacity from './shadow_key_penumbra_opacity';
import shadowKeyUmbraOpacity from './shadow_key_umbra_opacity';

const colorBlackHslString = colorBlackHsl.join(', ');

export default shadowElevation9({
  colorBlackHslString,
  shadowAmbientOpacity,
  shadowKeyPenumbraOpacity,
  shadowKeyUmbraOpacity,
});
