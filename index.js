var express = require('express');
var bodyParser = require('body-parser');

var unicornsRoute= require("./routes/unicorns_router");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/unicorns', unicornsRoute);



var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
