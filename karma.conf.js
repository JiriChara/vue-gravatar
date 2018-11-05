const webpackConfig = require('./config/webpack.base.conf.js');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],

    frameworks: ['jasmine'],

    files: ['test/index.js'],

    preprocessors: {
      'test/index.js': ['webpack']
    },

    webpack: webpackConfig,

    singleRun: true
  });
};
