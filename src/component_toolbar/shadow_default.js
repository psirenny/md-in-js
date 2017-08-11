// @flow

import componentToolbarElevation from './elevation';
import elevationShadowHeight4 from '../elevation/shadow_height_4_default';
import get from './shadow';

export default get({
  componentToolbarElevation,
  elevationShadowHeights: { [String(4)]: elevationShadowHeight4 },
});
