var config = require('./config.js');

// SourceMap generation
config.devtool = 'inline-source-map';
// Directory context
config.context = __dirname;
// Target environment
config.target = 'node';
