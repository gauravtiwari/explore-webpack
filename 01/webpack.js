/*
  To generate production grade outputs
  Feature: sourcemaps, minification, remove code duplication
*/

var nodeExternals = require('webpack-node-externals');
var webpack  = require('webpack');

// Initialize an empty config object : {}
var config = {};

// Ignore node_modules/* so all modules won't get bundled and include
// only whitelisted modules in bundle
config.externals = [nodeExternals({
  whitelist: ['require', 'webpack', 'jquery'],
})];

// Entry point for app
config.entry = './main.js';

// Main output directory and filename for bundled code
config.output = {
  path: __dirname + '/dist',
  filename: 'bundle.js',
};

// Sourcemap generation
config.devtool = 'inline-source-map';

// Add webpack plugins
config.plugins = [
  // Don't re-include same code
  new webpack.optimize.DedupePlugin(),
  // Minify the code
  new webpack.optimize.UglifyJsPlugin({ /* can pass many options */ }),
];

// Lets export the config
module.exports = config;
