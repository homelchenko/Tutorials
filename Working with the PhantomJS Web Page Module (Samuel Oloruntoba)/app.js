var http = require('http');
var path = require('path');

// If environment port is not set, default is 3000
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var express = require('express');
var app = express();

// If localhost, pretty-print html output
app.locals.pretty = process.env.PORT ? false : true;
app.set('port', port);

// parse json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// static directory
app.use(express.static(path.join(__dirname, 'public')));

// load our routes
app.use('/', require('./routes'));

// listen
http.createServer(app).listen(port);