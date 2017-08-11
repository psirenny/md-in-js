// @flow

import componentRaisedButtonElevationNormal from './elevation_normal';
import elevationShadowHeight2 from '../elevation/shadow_height_2_default';
import get from './shadow_normal';

export default get({
  componentRaisedButtonElevationNormal,
  elevationShadowHeights: { [String(2)]: elevationShadowHeight2 },
});
