var config = require('./config.js');
var Path = require('path');

// Resolve extensions, paths etc.
config.resolve = {
  extensions: ['', '.js', '.jsx', '.es6.js'],
  root: [Path.join(__dirname, 'node_modules')],
  modulesDirectories: ['node_modules'],
};
