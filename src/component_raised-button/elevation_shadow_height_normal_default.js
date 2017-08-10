// @flow

import componentRaisedButtonElevationHeightNormal from './elevation_height_normal';
import elevationShadowHeight2 from '../elevation/shadow_height_2_default';
import get from './elevation_shadow_height_normal';

export default get({
  componentRaisedButtonElevationHeightNormal,
  elevationShadowHeights: { [String(2)]: elevationShadowHeight2 },
});
