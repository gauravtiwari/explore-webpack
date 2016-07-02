// Initialize a basic config js object : {}
var config = {};

// Main entry point a.k.a main file
config.entry = './main.js';

// Main output directory and file for bundled code
config.output = {
  path: __dirname + '/dist',
  filename: 'bundle.js'
};

// Lets export the config so webpack can use
module.exports = config;
