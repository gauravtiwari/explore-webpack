/*
  Custom module loader
  Specify - extension, name of the loader,
  path to exclude and other params for loader
*/

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = require('./config.js');

// Custom module loaders : ex: babel, style, css, images ...
// Useful for new es6 syntax, JSX, React etc.
config.module = {
  loaders: [
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'stage-0', 'react']
      }
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader','css-loader')
    },
  ],
};
