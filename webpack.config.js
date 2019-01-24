const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = test = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'popup.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './src/chrome/popup.html',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin([
      { from: `./src/chrome/manifest.json`, to: `${__dirname}/dist` },
      { from: `./src/chrome/icon.png`, to: `${__dirname}/dist` },
      { from: `./src/chrome/content.js`, to: `${__dirname}/dist` },
      { from: `./src/chrome/inject.js`, to: `${__dirname}/dist` },
      { from: `./src/chrome/background.js`, to: `${__dirname}/dist` },
      { from: `./src/chrome/browser-polyfill.min.js`, to: `${__dirname}/dist` },
    ]),
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};