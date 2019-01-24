const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const common = require('../webpack.config.js');
const merged = {
  ...common,
  entry: [
    'react-hot-loader/patch',
    './src/index.dev.js'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/chrome/popup.dev.html',
      filename: 'index.html'
    }),
  ]
};

module.exports = merged;
