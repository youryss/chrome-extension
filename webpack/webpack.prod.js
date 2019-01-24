const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('../webpack.config.js');
const ZipPlugin = require('zip-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './src/chrome/popup.html',
      filename: 'popup.html'
    }),
    new ZipPlugin({
      path: '../zip',
      filename: 'chrome_extension.zip',
      pathPrefix: 'dist/',
    }),
    new ZipPlugin({
      path: '../zip',
      filename: 'firexfox_extension',
      pathPrefix: 'dist/',
      extension: 'xpi',
    })
  ]
});
