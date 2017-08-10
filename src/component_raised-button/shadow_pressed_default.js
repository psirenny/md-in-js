// @flow

import componentRaisedButtonElevationHeightPressed from './elevation_height_pressed_default';
import elevationShadowHeight8 from '../elevation/shadow_height_8_default';
import get from './shadow_pressed';

export default get({
  componentRaisedButtonElevationHeightPressed,
  elevationShadowHeights: { [String(8)]: elevationShadowHeight8 },
});
