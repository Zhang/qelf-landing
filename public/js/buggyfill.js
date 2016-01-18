window.viewportUnitsBuggyfill.init();

// ignore user agent force initialization
window.viewportUnitsBuggyfill.init({force: true});

// reduces the amount of times the buggyfill is reinitialized on window resize in IE
// for performance reasons.
window.viewportUnitsBuggyfill.init({refreshDebounceWait: 250});

// This enables abusing the CSS property 'content' to allow transporting
// viewport unit values for browsers with spotty support:
//   * vmin in IE9
//   * vmax in IE9, iOS <= 6
//   * calc(vh/vmin) in iOS < 8 and Android Stock Browser <= 4.4
//   * all of viewport units in Android Stock Browser <= 4.3
//
// To engage these hacks, you need to load the hacks file as well:
//
//   <script src="/path/to/viewport-units-buggyfill.hacks.js"></script>
//
window.viewportUnitsBuggyfill.init({hacks: window.viewportUnitsBuggyfillHacks});

// update internal declarations cache and recalculate pixel styles
// this is handy when you add styles after .init() was run
window.viewportUnitsBuggyfill.refresh();

// you can do things manually (without the style-element injection):
// identify all declarations using viewport units
window.viewportUnitsBuggyfill.findProperties();
var cssText = viewportUnitsBuggyfill.getCss();
