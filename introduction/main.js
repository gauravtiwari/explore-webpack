var $ = require('jquery');

// Run sub modules on document.ready
$(document).ready(function() {
  require('./alert.js');
  require('./counter.js');
});
