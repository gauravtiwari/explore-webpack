/*
  With React and modular config
  Folder: webpack/*
  Feature: sourcemaps, component stylesheets, minification, remove duplication
*/

var requireDir = require('require-dir');
var configs = requireDir('./webpack.configs');

// Lets export the config
module.exports = configs.config;
