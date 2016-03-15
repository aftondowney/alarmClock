// var alarm = require('./../js/time-interface.js').alarm;
// var moment = require('moment');
//
// $(document).ready(function() {
//
//
// });

$(document).ready(function(){
  $('#time').text(moment().format("MMM Do YYYY, h:mm a"));
});
