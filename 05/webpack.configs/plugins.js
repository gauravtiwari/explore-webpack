// Initialize plugins for webpack
var config = require('./config.js');
var webpack  = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// Figure out the environment to produce correct builds
var environment = require('./environment.js');

// Define empty plugins array
config.plugins = [
  new ExtractTextPlugin('bundle.css', { allChunks: true }),
  // Access NODE_ENV env variable through process.env
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(environment.nodeEnv),
    },
  }),
];

// Push more plugins based on build environment
if (environment.prod) {
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({ /* can pass many options */ })
  );
}
