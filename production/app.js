
var express = require('express');

var cfenv = require('cfenv');

var app = express();

var appEnv = cfenv.getAppEnv();
app.use('/', express.static(__dirname + '/dist'));

app.use(/.*/, function root(req, res) {
	res.sendFile(__dirname + '/dist/index.html');
});

app.listen(appEnv.port, function() {
  console.log("server starting on " + appEnv.url);
});
