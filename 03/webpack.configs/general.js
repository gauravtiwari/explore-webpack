var config = require('./config.js');
var environment = require('./environment.js');

// SourceMap generation
config.devtool = 'inline-source-map';
// Directory context
config.context = __dirname;
// Target environment
config.target = 'node';

// Debug mode
if (environment.dev) {
  config.debug = true
}
