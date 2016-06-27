var config = require('./config.js');
var environment = require('./environment.js');

// Main bundle output directory and file
config.output = {
  path: './dist',
  filename: environment.dev ? 'bundle.js' : 'bundle.min.js'
};
