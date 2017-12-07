var express = require('express');
var app = express();
var http = require('http').Server(app);

module.exports.express = express;
module.exports.app = app;
module.exports.http = http;
