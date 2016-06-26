/*
  Split webpack config into multiple files
  Folder: webpack/*
  Feature: sourcemaps, minification, remove duplication
*/

var requireDir = require('require-dir');
var configs = requireDir('./webpack.configs');

// Lets export the config
module.exports = configs.config;
