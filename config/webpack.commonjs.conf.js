const merge = require('webpack-merge');
const resolve = require('path').resolve;

const base = require('./webpack.base.conf');

module.exports = merge(base, {
  output: {
    path: resolve(__dirname, '..', 'lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  }
});
