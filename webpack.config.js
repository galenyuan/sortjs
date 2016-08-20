var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'sort.js',
    library: 'sortjs'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  }
}
