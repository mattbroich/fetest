require('angular-ui-router');

// declare the 'sb-wine' module with a dependency on ui-router
angular.module('sb-wine', ['ui.router']);

// include all JavaScript files except those ending in '-test.js' in this
// directory and its child directories
const context = require.context('.', true, /^(?!.*-test\.js).*\.js$/);
context.keys().forEach(context)
