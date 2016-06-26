// Initialize a basic config object : {}

var config = {};

// Main entry point
config.entry = './main.js';

// Main output directory and file
config.output = {
  path: __dirname + '/dist',
  filename: 'bundle.js'
};

// Lets export the config
module.exports = config;
