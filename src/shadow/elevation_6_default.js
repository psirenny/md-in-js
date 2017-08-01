// @flow

import colorBlackHsl from '../color/black_hsl';
import shadowAmbientOpacity from './ambient_opacity';
import shadowElevation6 from './elevation_6';
import shadowKeyPenumbraOpacity from './key_penumbra_opacity';
import shadowKeyUmbraOpacity from './key_umbra_opacity';

const colorBlackHslString = colorBlackHsl.join(', ');

export default shadowElevation6({
  colorBlackHslString,
  shadowAmbientOpacity,
  shadowKeyPenumbraOpacity,
  shadowKeyUmbraOpacity,
});
