var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Express
var app = express();

// Middleware
app.use(cors());
app.use(bodyParser());

// Controllers
var viewing = require('./controllers/viewController.js')

// Api
app.get('/api/sighting', viewing.get);
app.post('/api/sighting', viewing.post);
app.put('/api/sighting/:id', viewing.put);
app.delete('/api/sighting/:id', viewing.delete);

// Connections
var portNum = 3000;
var mongoUri = 'mongodb://localhost:27017/min-birds-mongoose';

mongoose.connect(mongoUri);

var db = mongoose.connection;
db.once('open', function () {
	console.log('Connected to MongoDB at:', mongoUri);
})

app.listen(portNum, function () {
	console.log("Robbing a bank on port:", portNum);
})