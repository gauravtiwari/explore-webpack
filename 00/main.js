var $ = require('jquery');
var WebpackConfig  = require('./webpack.js');

// Run sub modules on document.ready
$(document).ready(function() {
  require('./javascripts/alert.js');
  require('./javascripts/counter.js');
  // Lets print the config to DOM
  $('.config').append('<p>', WebpackConfig.output.path);
  console.log(WebpackConfig);
});
