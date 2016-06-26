var config = require('./config.js');
var devBuild = process.env.NODE_ENV !== 'production';
var nodeEnv = devBuild ? 'development' : 'production';

// Main output directory and file
config.output = {
  path: './dist',
  filename: devBuild ? 'bundle.js' : 'bundle.min.js'
};
