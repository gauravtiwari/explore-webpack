var config = require('./config.js');
var nodeExternals = require('webpack-node-externals');

// Ignore node_modules/* so all modules won't get bundled and include
// only whitelisted modules in bundle
config.externals = [nodeExternals({
  whitelist: ['require', 'webpack', 'jquery']
})];
