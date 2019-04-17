
// load our Angular app
require('./wines/wineModule');

// load and run all our test files
const context = require.context('.', true, /.+-test\.jsx?$/);
context.keys().forEach(context)
