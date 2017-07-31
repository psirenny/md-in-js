# md-in-js

Material Design constants (animation curves & durations, breakpoints, colors, shadows, etc…) all defined in JS.

## What is it?

md-in-js is an assortment of js constants and values used in material design. It's not a framework or a replacement for [material components](https://material.io/components/), [material design lite](https://getmdl.io/), [material-ui](http://www.material-ui.com/), et al.

## Why?

The frameworks listed above are opionated. They mostly use sass but they ALL declare their constants in css. You won't be able to access any of their values in your js components, your js animations, or in your css written in js (Styled Components, JSS, etc.)

The frameworks also try to simplify a broad and detailed specification. As a result, they end up omitting various parts of the spec. Good luck trying to use the `dense` and `tall` typographical styles outlined in the docs.

Moreover, md-in-js incorporates the [Android Wearable specification](https://www.google.com/design/spec-wear/android-wear/introduction.html) which, you'd be hard pressed to find in any of the other frameworks.

## Usage

css in js:

`/css/typography.css.js`

    import {
      colorBlackHsl,
      colorLightBlue500Hsl,
      typographyContrastBody1,
      typographyLeadingEnLikeBody1,
      typographySizeEnLikeBody1Device,
    } from 'md-in-js';

    export default {
      '.en.mobile .text': {
        'color': `hsl${colorBlackHsl}`,
        'font-size': typographySizeEnLikeBody1Device,
        'line-height': typographyLeadingEnLikeBody1,
        'opacity': typographyContrastBody1,
      },
      '.link': {
        'color': `hsl${colorLightBlue500Hsl}`,
      },
    };

React:

`/components/TimeRangeEn.jsx`

      import { createElement } from 'react';

      import {
        formatDateAliasHourMidnightEn as aliasMidnight,
        formatDateAliasHourNoonEn as aliasNoon,
        formatDateOptionsWeekdayHourMinShort as options,
        formatDateRangeString,
      } from 'md-in-js';

      // values = [{ hour: 16 }, { hour: 0 }] renders
      // <time>4 PM–Midnight</time>
      export default ({ values }) => {
        const locales = ['en'];
        const ltr = true;
        const aliases = [aliasNoon, aliasMidnight];

        return (
          <time>
            {{formatDateRangeString(
              options, locales, ltr, aliases, values[0], values[1]
            )}}
          </time>
        );
      };
