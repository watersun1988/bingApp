var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders:[
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
};
