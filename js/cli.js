var alarm = require('./time-interface.js').alarm;
var prompt = require('prompt');
prompt.start();

prompt.get('entry', function(err, result) {
    console.log(result);
});
