//VARIABLES PARA LA COMUNICACION VIA HTTP Y WEBSOCKETS
var express = require('express'); 
var connect = require('connect');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app  = express();
var httpServer = require('http').createServer(app); 
var port =  8090;

// Configuration
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

httpServer.listen(port);

console.log('The App runs on port ' + port);