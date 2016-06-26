// Setup basic jQuery dom alert
var $ = require('jquery');

$(document).ready(function() {
  $('.show-alert').click(function(event) {
    event.preventDefault();
    alert('You have clicked me');
    $(event.target).text('You have closed the alert box');
  });
});
