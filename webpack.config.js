const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    index1: path.join(__dirname, './src/page/index/index.js'),
    index2: path.join(__dirname, './src/page/index/index2.js'),
    index3: path.join(__dirname, './src/page/index/index3.js')
  },
  output: {
    path: path.join(__dirname, './dist/'),
    filename: '[name].bundle.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}