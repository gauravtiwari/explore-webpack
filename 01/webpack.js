/*
  To generate production grade outputs
  Feature: sourcemaps, minification, remove duplication
*/

var devBuild = process.env.NODE_ENV !== 'production';
var nodeEnv = devBuild ? 'development' : 'production';
var nodeExternals = require('webpack-node-externals');
var webpack  = require('webpack');

// Initialize an empty config object : {}
var config = {};

// Ignore node_modules/* so all modules won't get bundled and include
// only whitelisted modules in bundle
config.externals = [nodeExternals({
  whitelist: ['require', 'webpack', 'jquery']
})];

// Entry point for app
config.entry = './main.js';

// Main output directory and file
config.output = {
  path: __dirname + '/dist',
  filename: devBuild ? 'bundle.js' : 'bundle.min.js'
};

// SourceMap generation
config.devtool = 'inline-source-map';

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

// Lets export the config
module.exports = config;
