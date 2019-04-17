var webpackConfig = require('./webpack.config');

webpackConfig.entry = {};
webpackConfig.watch = true;

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon'],
    files: [
      'client/all-tests.js'
    ],
    preprocessors: {
      'client/all-tests.js': ['webpack']
    },
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
        type: 'html',
        dir: 'coverage/'
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },
    autoWatch: true,
    singleRun: false
  });
};
