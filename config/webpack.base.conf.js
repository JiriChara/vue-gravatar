const resolve = require('path').resolve;

module.exports = {
  entry: resolve(__dirname, '..', 'src', 'index.js'),

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
