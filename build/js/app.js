(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
