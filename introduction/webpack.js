// Initialize a basic config object : {}

var config = {};
config.entry = './main.js';
config.output = {
  path: __dirname + '/dist',
  filename: 'bundle.js'
};

// Lets export the object
module.exports = config;
