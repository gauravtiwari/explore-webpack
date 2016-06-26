/*
  Split webpack config into multiple files
  Folder: webpack/*
  Feature: sourcemaps, minification, remove duplication
*/

var requireDir = require('require-dir');
var configs = requireDir('./webpack.configs');

// SourceMap generation
configs.config.devtool = 'inline-source-map';

// Lets export the config
module.exports = configs.config;
