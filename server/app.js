var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var create = require('./routes/create');
var gethero = require('./routes/gethero');
var remove = require('./routes/remove');

app.get('/*', function (req, res){
	var file = req.params[0] || "views/index.html";
	res.sendFile(path.join(__dirname, "/public", file));
});
app.use(bodyParser.json()); // needed for angular requests

//express routes
app.use('/create', create);
app.use('/', gethero);
app.use('/', remove);

//connect to mongoose
var databaseUri = 'mongodb://localhost:27017/omicron';

mongoose.connect(databaseUri);

mongoose.connection.on('connected', function (){
  console.log('Mongooose connected to' , databaseUri);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose failed to connect because error:', err);
});
//server start
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('Listening on port', app.get('port'));
});
