// Initialize plugins for webpack

var config = require('./config.js');
var webpack  = require('webpack');
var devBuild = process.env.NODE_ENV !== 'production';
var nodeEnv = devBuild ? 'development' : 'production';

// Define empty plugins array
config.plugins = [
  // Access NODE_ENV env variable through process.env
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
    },
  }),
];

// Uglify build in production
if (!devBuild) {
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({ /* can pass many options */ })
  );
}
