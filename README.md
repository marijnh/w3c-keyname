# W3C keycode

Tiny library that exports an object that maps numeric browser key
codes to
[`KeyEvent.code`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code)
strings. The full list of such codes (of which this library only
supports a subset) is defined in
[this document](https://w3c.github.io/uievents-code/).

License: MIT

Does not try to target ancient browsers, and leaves out obscure keys.
Intended to use as a reasonable fallback for browsers that don't have
native support for `KeyEvent.code`.
