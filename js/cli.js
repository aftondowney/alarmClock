var Journal = require('./.js').Journal;
var prompt = require('prompt');
prompt.start();

prompt.get('entry', function(err, result) {
    console.log(result);
});
