// var alarm = require('./../js/time-interface.js').alarm;
// var moment = require('moment');
//
// $(document).ready(function() {
//
//
// });

// exports.matchTime = function(alarm_time){
//   for(var i = (moment().format("h:mm:ss")); i <= alarm_time; i++)
//   {
//
//   }
//
// }






$(document).ready(function(){

  var alarm = null;

  $('.set_alarm').submit(function(event) {
    event.preventDefault();
    var alarm_time = $("input#alarm_time").val();
    var alarm_date = moment().format("MM DD YYYY");
    var alarm_datetime = alarm_date + " " + alarm_time;
    alarm = new Date(alarm_datetime);
    console.log(alarm);
  });



  var refresh = function() {
    console.log(alarm);
    $('#time').text(moment().format("h:mm:ss"));
    if(alarm && alarm <= moment()) {
      alert("Time to get up!");
      alarm = null;
    }
  }

setInterval(refresh, 100);
});
