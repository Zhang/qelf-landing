/*globals require, process, console, module, __dirname*/
'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var path = require('path');
var mongoskin = require('mongoskin');
var uri = process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/qelf-landing';

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var db = mongoskin.db(uri, {
  w: 1,
  j: true,
  native_parser: true,
  poolSize: 25
});


app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/', urlencodedParser, function(req, res) {
  var email = req.body.email;
  var referred = req.body.referred;

  db.collection('alpha-users').insert(
    {
      email: email,
      referred: referred
    },
    function(err, result) {
      if (err) return res.status(500).send('An error has occured', err);
      res.status(200).send('');
    });
});

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
});
