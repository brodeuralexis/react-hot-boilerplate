var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      ''
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.(ts|tsx)$/,
      loaders: ['babel', 'ts'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.(css|scss)$/,
      loaders: ['style?sourceMaps', 'css?sourceMaps&modules&localIdentName=[path][name]---[local]---[hash:base64:5]', 'postcss', 'sass?sourceMaps']
    }]
  },
  postcss: {
    plugins: [
      require('autoprefixer')({ browsers: ['last 2 versions'] })
    ]
  }
};
