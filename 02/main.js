var $ = require('jquery');

// Run sub modules on document.ready
$(document).ready(function() {
  require('./javascripts/alert.js');
  require('./javascripts/counter.js');
});
