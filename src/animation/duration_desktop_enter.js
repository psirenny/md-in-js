// @flow

import mobileEnterDuration from './duration_mobile_enter';
import mobileExitDuration from './duration_mobile_exit';
import desktopExitDuration from './duration_desktop_exit';

export default (mobileEnterDuration / mobileExitDuration) * desktopExitDuration;
