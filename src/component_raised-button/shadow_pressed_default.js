// @flow

import componentRaisedButtonElevationPressed from './elevation_pressed_default';
import elevationShadowHeight8 from '../elevation/shadow_height_8_default';
import get from './shadow_pressed';

export default get({
  componentRaisedButtonElevationPressed,
  elevationShadowHeights: { [String(8)]: elevationShadowHeight8 },
});
