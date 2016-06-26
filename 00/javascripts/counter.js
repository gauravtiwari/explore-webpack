var $ = require('jquery');

var counter = $('.counter');

$('.increment').click(function(event) {
  event.preventDefault();
  counter.text(parseInt(counter.text()) + 1);
});

$('.decrement').click(function(event) {
  event.preventDefault();
  if (counter.text() >= 1) {
    counter.text(parseInt(counter.text()) - 1);
  }
});
