// @flow

import mobileEnterDuration from './animation_duration_mobile_enter';
import mobileExitDuration from './animation_duration_mobile_exit';
import desktopExitDuration from './animation_duration_desktop_exit';

export default (mobileEnterDuration / mobileExitDuration) * desktopExitDuration;
