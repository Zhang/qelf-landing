'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
});
