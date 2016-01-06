'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/fonts'));
app.use(express.static(__dirname + '/font-awesome'));
app.use(express.static(__dirname + '/img'));

//app.use(express.static('index.html'));
app.get('/', function(req, res) {
  res.send('index.html');
});
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
